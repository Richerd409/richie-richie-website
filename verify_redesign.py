from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            page = browser.new_page()

            # 1. Load the page
            print("Loading page...")
            page.goto("http://localhost:5173/")

            # Wait for the intro to finish
            # The intro takes about 4.5 seconds (3.5s + 1s fade)
            # Let's wait 6 seconds to be safe
            print("Waiting for intro...")
            page.wait_for_timeout(6000)

            # 2. Check for ProfileCard visibility
            print("Checking Profile Card...")
            # We look for "VIBE CODER" text
            page.wait_for_selector("text=VIBE CODER", state="visible")

            page.screenshot(path="verification_1_profile.png")
            print("Profile screenshot saved.")

            # 3. Expand the card
            # The "Tap to connect" button expands the card
            print("Expanding card...")
            page.click("text=Tap to connect")

            # Wait for buttons to appear
            page.wait_for_selector("text=About Me", state="visible")

            page.screenshot(path="verification_2_expanded.png")
            print("Expanded screenshot saved.")

            # 4. Click About Me
            print("Clicking About Me...")
            page.click("text=About Me")

            # Wait for About overlay
            # Look for "Vibe Coder", "Freelance Coding", "Web Development"
            page.wait_for_selector("h3:has-text('Vibe Coder')", state="visible")

            page.screenshot(path="verification_3_about.png")
            print("About screenshot saved.")

        finally:
            browser.close()

if __name__ == "__main__":
    run()
