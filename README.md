<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

[![in.orbit logo][product-logo]][product-repo-url]

</div>
<br />

<!-- ABOUT THE PROJECT -->
## About The Project

[![in.orbit screen shot][product-screenshot]][product-repo-url]

Developed in the NLW Pocket by [Rocketseat][Rocketseat-url], _**in.orbit**_ is a minimalist web app designed to help users set and track their weekly goals. Users can easily mark goals as completed, and the app will display the percentage of completed goals, providing a simple yet effective way to stay organized.

This project is structured as a monorepo, built with [Turbo Repo][Turbo-Repo-url], and consists of two main applications:

* `server`: A [Fastify][Fastify-url]-based backend running on [Docker][Docker-url] for a reliable working and production environment. It uses [Postgres][Postgres-url] as the database, and [Drizzle ORM][Drizzle-url] to interact with the database efficiently.
* `web`: A [Next.js][Next-url] (T3 App) frontend that benefits from server-side rendering to enhance performance, and SEO, and prevent layout shifting. [TailwindCSS][TailwindCSS-url] handles the app's styling, ensuring a clean and responsive design.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![Turbo Repo][TurboRepo]][Turbo-Repo-url]
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]
[![Fastify][Fastify]][Fastify-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Docker][Docker-url]

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jos620/in-orbit.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Setup the environment variables
   ```sh
   cd apps/server
   cp .env.example .env

   cd apps/web
   cp .env.example .env
   ```
4. Setup the database
   ```sh
   docker compose up -d

   cd apps/server
   pnpm db:migrate
   pnpm db:seed # optionally feed the database with example data
   ```
5. Start the server
   ```sh
   pnpm dev
   ```
   By default, the `server` will run on `http://localhost:3333` and the `web` app on `http://localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TO-DO -->
## To-do

- [ ] Improve responsiveness
- [ ] Add "undo" button to goals
- [ ] Add "manage" button to delete goals

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/jos620/in-orbit/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jos620/in-orbit" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* [/in/mateus-ito][linkedin-url]
* contact.matthew.ito@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Rocketseat's YouTube Channel][Rocketseat-url]
* [TypeScript - JavaScript with syntax for types][TypeScript-url]
* [Biome - faster ESLint/Prettier replacement][Biome-url]
* [Drizzle - ORM for Node.js][Drizzle-url]
* [Zod - TypeScript-first schema declaration and validation][Zod-url]
* [Radix - Unstyled accessible UI components][Radix-url]
* [T3 App - Next.js template][T3-url]
* [Tanstack Query - Data fetching library][TanstackQuery-url]
* [Day.js - Date management library][Day.js-url]
* [Lucide - SVG icon library][Lucide-url]
* [React Hook Form - Performant form library][RHF-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mateus-ito
[product-screenshot]: .github/assets/screenshot.png
[product-logo]: .github/assets/full-logo.svg
[product-repo-url]: https://github.com/jos620/in-orbit
[Rocketseat-url]: https://www.youtube.com/@rocketseat
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[TurboRepo]: https://img.shields.io/badge/turbo%20repo-35363E?style=for-the-badge&logo=turborepo&logoColor=white
[Turbo-Repo-url]: https://turbo.build/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Fastify]: https://img.shields.io/badge/Fastify-20232A?style=for-the-badge&logo=fastify&logoColor=white
[Fastify-url]: https://www.fastify.io/
[Docker-url]: https://docs.docker.com/get-started/
[TypeScript-url]: https://www.typescriptlang.org/
[Biome-url]: https://biomejs.dev/
[Drizzle-url]: https://orm.drizzle.team/
[Zod-url]: https://zod.dev/
[Radix-url]: https://www.radix-ui.com/
[T3-url]: https://create.t3.gg/
[TanstackQuery-url]: https://tanstack.com/query/5
[Day.js-url]: https://day.js.org/
[Lucide-url]: https://lucide.dev/
[RHF-url]: https://react-hook-form.com/
[Postgres-url]: https://www.postgresql.org/
