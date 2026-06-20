# SOP-01: Cost-Effective Domain Infrastructure & Platform Selection

**Objective:** To migrate small business digital assets away from expensive, locked-in web hosting ecosystems to a free, developer-grade static hosting architecture.
**Target Audience:** Non-technical small business owners and independent contractors.
**Prerequisites:** Active Porkbun registry account, free GitHub account.

---

## 1. Platform Decision Matrix
Before provisioning infrastructure, use this matrix to align business requirements with the correct zero-cost hosting framework:

| Business Goal / Asset Type | Recommended Framework | Storage Strategy | Interaction Layer |
| :--- | :--- | :--- | :--- |
| **High-Volume Photo Portfolios** (e.g., `simeon.pics`) | HTML5 Flexbox Grid | Free External Image Host (Cloudinary / Google) | Integrated Commenting (Disqus / Giscus) |
| **Technical Blogs & Case Studies** (e.g., `simbo.tech`) | Quarto / Hugo / Markdown | Native GitHub Repository | GitHub-backed Markdown Comments |
| **Simple Brochure & Contact Pages** (e.g., `simeonpaynter.com`) | Clean Semantic HTML/CSS | Native GitHub Repository | Free Web Forms (Formspree / StaticForms) |

---

## 2. Step-by-Step Implementation Work Instructions

### Phase A: Sunk Cost Mitigation & Domain Release
1. Log into your legacy web hosting provider dashboard (e.g., WordPress, Squarespace, Wix).
2. Navigate to **Account Upgrades / Purchases** and toggle **Auto-Renew OFF** on the hosting plan line item.
3. Navigate to **Domain Management**, select your domain name, and turn **Transfer Lock OFF**.
4. Request the **Authorization Code (EPP/Auth Code)**. Copy the random string sent to your verified registrant inbox.

### Phase B: Infrastructure Mapping at Porkbun
1. Log into your **Porkbun** account and access **Domain Management**.
2. If the domain is newly purchased, find it in your active list. If it is migrating, open the **Pending Transfers** tab.
3. Access the **DNS Records** configuration dashboard.
4. Locate the **Quick DNS Config** module and click the **GitHub** integration button. Confirm the override.
5. In the auxiliary prompt, assign the **Host** field as `www` and input your exact GitHub routing target (`username.github.io`) into the **Answer** field. Click **Submit**.

### Phase C: Deployment Engine Activation
1. Log into **GitHub** and build a new **Public Repository** named exactly after your target domain name.
2. Initialize the master workspace with a standard `README.md` and select an open-source **MIT License**.
3. Create your layout asset file and name it exactly `index.html`. Commit changes directly to the `main` branch.
4. Open repository **Settings** > **Pages**. Set the deployment source engine to **Deploy from a branch** and target the **`main`** branch.
5. Scroll down to **Custom Domain**, input your root web address (e.g., `simbo.tech`), and click **Save**.
6. Wait 10 minutes for background security keys to compile, then check the box to **Enforce HTTPS**.

### 3. Verification Protocol
Open an isolated, private browser window and type your domain address into the navigation bar. If the browser displays your committed layout over a secure padlock connection without security exceptions, the migration handshake is successful.
