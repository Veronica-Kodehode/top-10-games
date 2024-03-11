const topSellers = [
  {
    title: "Grand Theft Auto V",
    developer: "Rockstar Games",
    releaseYear: 2013,
    categories: ["Action", "Adventure", "RPG"],
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, set within the fictional state of San Andreas. The single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals.",
    platforms: ["PC", "Playstation", "X-Box"],
    logo: "gtav-logo.jpg",
  },
  {
    title: "Minecraft",
    developer: "Mojang",
    releaseYear: 2011,
    categories: ["Sandbox", "Survival"],
    description:
      "Minecraft is a sandbox video game developed and published by Mojang. In Minecraft, players can build and explore virtual worlds made up of blocks. The game has various modes, including survival mode where players must acquire resources and maintain health, and creative mode where players have unlimited resources and can create elaborate structures.",

    platforms: ["PC", "Playstation", "X-Box", "Nintendo"],
    logo: "minecraft-logo.jpg",
  },
  {
    title: "Tetris",
    developer: "Various",
    releaseYear: 1984,
    categories: ["Puzzle"],
    description:
      "Tetris is a tile-matching puzzle video game originally designed and programmed by Alexey Pajitnov. In Tetris, geometric shapes called Tetriminos fall from the top of the screen, and the player must rotate and arrange them to create horizontal lines without any gaps. When a line is completed, it disappears, and the player earns points.",

    platforms: ["Various"],
    logo: "tetris-logo.jpg",
  },
  {
    title: "Wii Sports",
    developer: "Nintendo",
    releaseYear: 2006,
    categories: ["Sports"],
    description:
      "Wii Sports is a sports video game developed and published by Nintendo. It was designed as a launch title for the Nintendo Wii console and features a collection of five sports simulations, including tennis, baseball, bowling, golf, and boxing. The game utilizes the Wii Remote controller's motion-sensing capabilities for immersive gameplay.",

    platforms: ["Nintendo Wii"],
    logo: "wii-sports-logo.png",
  },
  {
    title: "PlayerUnknown's Battlegrounds (PUBG)",
    developer: "PUBG Corporation",
    releaseYear: 2017,
    categories: ["Battle Royale"],
    description:
      "PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation. In PUBG, up to 100 players parachute onto an island, scavenge for weapons and equipment, and fight to be the last person or team standing. The game's map size gradually decreases over time, forcing players into closer proximity and increasing the intensity of the battles.",

    platforms: ["PC", "Playstation", "X-Box", "Mobile"],
    logo: "pubg-logo.jpg",
  },
  {
    title: "Super Mario Bros.",
    developer: "Nintendo",
    releaseYear: 1985,
    categories: ["Platformer"],
    description:
      "Super Mario Bros. is a platform game developed and published by Nintendo. It follows Mario and Luigi as they embark on a quest to rescue Princess Toadstool from the villainous King Bowser. The game is renowned for its side-scrolling gameplay, power-ups like the Super Mushroom and Fire Flower, and the iconic characters that have become staples of the Nintendo franchise.",

    platforms: ["Nintendo Entertainment System (NES)"],
    logo: "super-mario-logo.png",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    releaseYear: 2017,
    categories: ["Action", "Adventure"],
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. Set in a vast open world, players control Link as he explores the kingdom of Hyrule, battles enemies, solves puzzles, and embarks on a quest to defeat the ancient evil Calamity Ganon. The game is praised for its immersive gameplay and attention to detail.",

    platforms: ["Nintendo Switch", "Wii U"],
    logo: "zelda-botw-logo.jpg",
  },
  {
    title: "Garry's Mod",
    developer: "Facepunch Studios",
    releaseYear: 2004,
    categories: ["Sandbox"],
    description:
      "Garry's Mod is a sandbox game developed by Facepunch Studios. It allows players to manipulate objects and experiment with physics in a virtual environment. Garry's Mod has a diverse and active community that creates a wide range of user-generated content, including game modes, maps, and modifications using the Source engine.",

    platforms: ["PC"],
    logo: "garrys-mod-logo.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games",
    releaseYear: 2018,
    categories: ["Action", "Adventure"],
    description:
      "Red Dead Redemption 2 is an action-adventure game developed by Rockstar Games. Set in the late 1800s, the game follows Arthur Morgan, a member of the Van der Linde gang, as he navigates the changing American frontier. The game features an expansive open world, immersive storytelling, and a mix of action, exploration, and interaction with a rich cast of characters.",

    platforms: ["Playstation", "X-Box", "PC"],
    logo: "red-dead-logo.jpg",
  },
  {
    title: "Mario Kart 8 Deluxe",
    developer: "Nintendo",
    releaseYear: 2017,
    categories: ["Racing"],
    description:
      "Mario Kart 8 Deluxe is a kart racing game developed by Nintendo. It is the enhanced version of Mario Kart 8 for the Nintendo Switch console. Players race against each other on various tracks, using power-ups and items to gain an advantage. The game features a diverse roster of characters from the Mario series and introduces new elements such as anti-gravity racing.",

    platforms: ["Nintendo Switch"],
    logo: "mario-kart-logo.jpg",
  },
];

for (let item of topSellers) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const contentContainer = document
    .getElementById("content-container")
    .append(cardContainer);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  cardContainer.append(textContainer, imageContainer);

  const img = document.createElement("img");
  img.src = `logos/${item.logo}`;

  const imgBox = document.createElement("div");
  const logoBox = document.createElement("div");
  logoBox.classList.add("logo-box");

  for (let platform of item.platforms) {
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-circle");

    const logo = document.createElement("img");
    logo.src = `logo/${platform}.png`;
    logo.classList.add("logo");

    logoDiv.append(logo);
    logoBox.append(logoDiv);
  }
  imgBox.append(img);

  imageContainer.append(imgBox, logoBox);

  const title = document.createElement("h2");
  title.textContent = item.title;

  const row1 = document.createElement("div");
  row1.classList.add("row");
  const subtitle1 = document.createElement("h3");
  subtitle1.textContent = "Developer:";
  subtitle1.classList.add("bold");

  const dev = document.createElement("h3");
  dev.textContent = item.developer;
  row1.append(subtitle1, dev);

  const row2 = document.createElement("div");
  row2.classList.add("row");
  const subtitle2 = document.createElement("h3");
  subtitle2.textContent = "Release Year:";
  subtitle2.classList.add("bold");

  const release = document.createElement("h3");
  release.textContent = item.releaseYear;
  row2.append(subtitle2, release);

  const paragraph = document.createElement("p");
  paragraph.textContent = item.description;

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  const row3 = document.createElement("div");
  row3.classList.add("row", "row3");

  const catContainer = document.createElement("div");
  catContainer.classList.add("row");
  row3.append(catContainer);

  for (let category of item.categories) {
    const catBox = document.createElement("div");
    catBox.classList.add("cat-box");
    catContainer.append(catBox);
    const text = document.createElement("h4");
    text.textContent = category;
    catBox.append(text);
  }
  textContainer.append(title, row1, row2, paragraph, spacer, row3);
}
