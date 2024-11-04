# Xscriptor

**This is one of the latest versions of the general template for the website xscriptor.com**

**Xscriptor** is a website that offers a variety of artistic and literary content, including art collections, author information, a project portfolio, a blog, and a contact section.

## Site Sections

- **Home**: Main page providing an overview of the site and its featured content.
- **Collections**: Gallery of available art and literary works.
- **Info**: Detailed information about the author and the site's mission.
- **Contact**: Form and details for reaching out to the author or team.
- **Portfolio**: Showcase of completed projects and works.
- **Blog**: Articles and posts related to various topics of interest.
- **Policies**: Page detailing privacy policies and terms of use.

## Screenshots

![Home](https://github.com/xscriptorcode/xscriptor/raw/english/screenshots/1.png)
![JSON Animation](https://github.com/xscriptorcode/xscriptor/raw/english/screenshots/2.png)
![Form-Cursor](https://github.com/xscriptorcode/xscriptor/raw/english/screenshots/3.png)

## Components

- **Home**: Used to separate the home logic and utilize meta with Next.js.
- **Cursor**: Custom cursor implementation.
- **Footer**: A component for easily importing into each site section.
- **Inicio.json**: Opening animation rendered with Lottie, more efficient than mp4.
- **InteractiveText/one/two**: Variations of the same code, used for phrase play in Xscriptor.
- **Loading Animation**: Component defining functionality to play Inicio.json.
- **Navbar**: Navigation bar.
- **NavLink**: Links within the navigation bar.
- **NewsletterPopup**: Component for newsletter subscription.
- **ParticleBackground**: Component for particle script in the info section.
- **TransitionProvider**: Animations and transitions.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for web applications.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): CSS framework for responsive design.
- [Prisma](https://www.prisma.io/): Database ORM.
- [MySQL](https://www.mysql.com/): For database storage.
- [Apache](https://www.apache.org/): For server and web application management.

**Note**: The site is currently static and hosted on a third-party service, but it will eventually be moved to a self-hosted server for better administrative control.

**sitemap.xml**: Manages site redirection in case you want to customize it.

## Installation and Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/xscriptorcode/xscriptor/
   cd xscriptor
   npm install

## Getting Started
2. Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

3. Open http://localhost:3000 in your browser.
And start transforming the content.