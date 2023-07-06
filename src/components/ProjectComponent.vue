<template>
  <!-- <div class="h-[450px]" id="Projects"> -->
  <section id="Projects" className="text-gray-400 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1
          className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"
        >
          Apps I've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are some of the apps i have build not including professional
          sites and projects I have worked on during my professional career.
          Some of the apps are on github.
        </p>
        <span>
          <a
            class="hover:underline hover:text-blue-500"
            target="_blank"
            href="https://github.com/Fani2000"
          >
            Fani Keorapetse Github
          </a>
        </span>
      </div>
      <div className="flex flex-wrap -m-4 text-white">
        <template v-for="project in projects" :key="project.title">
          <a :href="project.link" className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                :src="project.image"
              />
              <div
                className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
              >
                <h2
                  className="tracking-widest text-sm title-font font-medium text-green-400 mb-1"
                >
                  {{ project.subtitle }}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {{ project.title }}
                </h1>
                <p className="leading-relaxed">{{ project.description }}</p>
              </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup>
// import projects from "../data/projects.json";
import natours from "../assets/natours.png";
import musicPlayer from "../assets/music-player.png";
import nearBy from "../assets/nearBy.png";
import forkify from "../assets/forkify.png";
import nasa from "../assets/nasa.png";

const projects = [
  {
    title: "Mapty-With-Leaflet",
    subtitle: "Find the nearby places around your location.",
    description:
      "This is the vue app that allows you to find the nearby places around you using tomtom map api and services to do requests.",
    technologies: ["Vue js", "TomTom Api", "Pinia"],
    image: nearBy,
    link: "https://silver-zuccutto-d07a71.netlify.app/",
  },
  {
    title: "Forkify app",
    subtitle: "Recipe app",
    description:
      "The web app that allows one to find the recipes of their favorite food and also bookmark them and access them later.",
    technologies: ["Javascript", "Recipe API", "Axios"],
    image: forkify,
    link: "https://fani-forkify.netlify.app/",
  },
  {
    title: "Music Player",
    subtitle: "A Full vue music player project",
    description:
      "The music player which allows users to upload and listen to music either uploaded by other users or by themselves.",
    technologies: ["Vue", "Pinia", "Firebase - Firestore, Storage"],
    image: musicPlayer,
    link: "https://stunning-caramel-1fc7d9.netlify.app/",
  },
  {
    title: "Natours project",
    subtitle: "Full MERN PROJECT",
    description:
      "The Full mern project that allows users to find the local tours that are around them and also provides tour guides with an interface to add tours.",
    technologies: ["Nodejs", "Mongodb", "Express", "Ejs"],
    image: natours,
    link: "",
  },
  {
    title: "Nasa sample project",
    subtitle: "MERN Stack project",
    description:
      "The complete MERN stack project with containers, process managers and react frontend, using mongodb to store collections and data from the nasa public api.",
    technologies: [
      "Nodejs",
      "Express",
      "Mongodb",
      "Reactjs",
      "Redux-toolkit",
      "Docker",
      "pm2",
      "JWT",
      "More express related middlewares",
    ],
    image: nasa,
    link: "",
  },
];
</script>
