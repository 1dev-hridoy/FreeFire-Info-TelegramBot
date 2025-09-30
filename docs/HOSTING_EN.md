# Bot Hosting Guide (English)

This guide explains how to deploy your Telegram bot on [Katabump](https://katabump.com/en/) for free, so it can run 24/7.

### Prerequisites
- All your bot files (including `node_modules`) must be compressed into a single `.zip` file.

### Deployment Steps

1.  **Navigate to Katabump:** Open your web browser and go to [https://katabump.com/en/](https://katabump.com/en/).

2.  **Sign In:** Click the **Sign In** button. If you don't have an account, create one.

3.  **Go to Dashboard:** After logging in, navigate to your dashboard.

4.  **Order a New Server:** Find and click on the **Order** section to create a new server.

5.  **Select Server Type:** Choose the **Node.js** server option for your bot. Select the free plan.

6.  **Wait for Setup:** After creating the server, wait for 2-5 minutes for it to be fully set up and ready.

7.  **View Server Details:** From your list of servers, find the new one and click the **See More** button in the "Action" column.

8.  **Access Server:** In the server details, click on the **Access Server** button.

9.  **Copy Credentials:** A popup will appear with your login details. Copy the **Identifier** and the **Current password**.

10. **Go to Server Panel:** Click the **Go to Server** button. This will open the server control panel in a new tab.

11. **Log In:** Use the `Identifier` as your username/email and the `Current password` as your password to log in.

12. **Upload Files:** Once logged in, navigate to the **Files** tab. Upload the `.zip` file of your bot that you created earlier.

13. **Extract Files:** Right-click on the uploaded `.zip` file and select **Extract** (or a similar option) to unpack your bot's files.

14. **Configure Startup:** Navigate to the **Startup** tab.

15. **Change Main File:** Find the field for the main script file (it might be set to `index.js` by default) and change it to `bot.js`.

16. **Start the Bot:** Go to the **Console** tab.

17. **Run the Server:** Click the **Start** button (it may look like a play icon ▶). Your bot should now be running on the server. Check the console for any logs or error messages.
