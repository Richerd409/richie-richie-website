from playwright.sync_api import sync_playwright

def verify_redesign_v2():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Load the page
        print("Loading page...")
        page.goto("http://localhost:5173/")

        # Wait for Intro to complete (it takes 3.5s + 1s fade out = 4.5s)
        print("Waiting for Intro to complete...")
        page.wait_for_timeout(6000)

        # 2. Verify BackgroundTiles
        # We can't easily verify the canvas content, but we can check if the canvas exists and covers the screen.
        print("Verifying BackgroundTiles...")
        canvas = page.locator("canvas")
        if canvas.count() > 0:
            print("Canvas found.")
        else:
            print("Canvas NOT found!")

        # 3. Verify ProfileCard
        print("Verifying ProfileCard...")
        page.wait_for_selector("text=VIBE CODER", state="visible")
        page.screenshot(path="verification_v2_profile.png")
        print("Profile screenshot saved.")

        # 4. Expand ProfileCard
        print("Expanding ProfileCard...")
        page.click("text=Tap to connect")
        page.wait_for_selector("text=About Me", state="visible")
        page.screenshot(path="verification_v2_expanded.png")
        print("Expanded screenshot saved.")

        # 5. Verify Calculator
        print("Verifying Calculator...")
        page.click("text=Cyber Calc")
        page.wait_for_selector("text=C", state="visible")
        page.wait_for_selector("text=7", state="visible")
        # Check for glassmorphism classes or styles (indirectly via visual check)
        page.screenshot(path="verification_v2_calculator.png")
        print("Calculator screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_redesign_v2()
