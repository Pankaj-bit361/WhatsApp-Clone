const axios = require("axios");
const { config } = require("../common/config");
const { UserModel } = require("../Models/user.model");

const getLogin = async ({ code, redirectUri }) => {
  try {
    let accessToken, refreshToken, idToken, userInfo;

    // Check if code and redirectUri are provided
    if (!code || !redirectUri) {
      throw new Error("Authorization code and redirect URI are required");
    }

    // Token exchange with Google OAuth
    try {
      const response = await axios.post(
        "https://accounts.google.com/o/oauth2/token",
        {
          code,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }
      );

      // Check if the response contains data
      if (!response.data) {
        throw new Error("No data returned from token exchange");
      }

      console.log("Token response:", response.data);

      // Extract tokens from response
      accessToken = response.data.access_token;
      refreshToken = response.data.refresh_token;
      idToken = response.data.id_token;

      // Validate if accessToken is present
      if (!accessToken) {
        throw new Error("Access token missing from token response");
      }
    } catch (tokenError) {
      console.error("Error during token exchange:", tokenError.response?.data || tokenError.message);
      throw new Error("Failed to exchange authorization code for tokens");
    }

    // Fetch user information from Google API
    try {
      const userInfoResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Check if userInfoResponse contains data
      if (!userInfoResponse.data) {
        throw new Error("No user information returned from Google API");
      }

      userInfo = userInfoResponse.data;

      // Ensure the email is available in userInfo
      if (!userInfo.email) {
        throw new Error("Email missing from user information");
      }

    } catch (userInfoError) {
      console.error("Error fetching user info:", userInfoError.response?.data || userInfoError.message);
      throw new Error("Failed to fetch user information");
    }

    // Return successful login data
    return {
      success: true,
      data: {
        accessToken,
        refreshToken,
        ...userInfo,
      },
    };

  } catch (error) {
    console.error("Error in getLogin:", error.message);
    return { success: false, message: error.message };
  }
};

module.exports = { getLogin };
