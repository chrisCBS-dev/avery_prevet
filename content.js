/* ============ EDIT YOUR SITE HERE ============
   - Text: change anything between the quotes.
   - Photos: each "images" list is the order they appear. Add a photo by
     dropping the file in the images/ folder and adding its name to a list;
     remove one by deleting its line. Names are not case-sensitive.
   - Sections appear top to bottom in the order listed; move a { ... } block
     to reorder (e.g. put "childhood" first for oldest-to-newest).
   - A group may have a "video" (shown before its photos).
================================================== */
const SITE = {
  name: "Avery LaSala",
  title: "Pre-Veterinary Student, Virginia Tech",
  tagline: "A lifelong love of animals, and the hands-on experience to match.",
  hero: "fox_3.jpg",
  email: "averylasala@gmail.com",
  sections: [
    {
      id: "rehab",
      when: "Spring and summer 2026",
      title: "Wildlife Rehabilitation Intern",
      intro: "The week after my eighteenth birthday I passed the Connecticut State Wildlife Rehabilitator exam and earned my license. This led to a set of experiences that solidified my ambition to work in wildlife medicine. I spent the spring and summer under the supervision of Call of the Wild CT, where I rehabilitated various mammals, including infant and juvenile raccoons, red foxes, and groundhogs.",
      groups: [
        {
          title: "Rehabilitation of Red Fox (Rudy)",
          caption: "When we first got the call for Rudy, he had mange and was extremely hypothermic. Rudy was found alone - and considering his medical needs, we took a more hands-on approach with his rehabilitation. I formed a deep bond with Rudy and headed the management of his care, which made it all the more rewarding to watch his natural instincts come out and be a part of his successful release.",
          video: "fox_video.mp4",
          images: ["fox_1.jpg", "fox_2.jpg", "fox_3.jpg", "fox_4.jpg"]
        },
        {
          title: "Rehabilitation of Newborn Raccoons",
          caption: "While caring for Rudy, we were brought three 2-week-old raccoon orphans. They required temporary incubation, bottle feeding, and near constant care. I was allowed by my supervisors to manage their care and weaned them onto solid foods. We were able to get them healthy and eventually released them into the wild.",
          images: ["racoons_1.jpg", "racoons_2.jpg", "racoons_4.jpg"]
        }
      ]
    },
    {
      id: "vt",
      when: "Freshman year",
      title: "Volunteering at Virginia Tech",
      intro: "My experience working with Call of the Wild CT was so foundational that I immediately sought out opportunities to work with animals in any capacity in my freshman year at Virginia Tech. I volunteer at Pulaski County Animal Control and Shelter multiple times a week, and am sometimes able to assist in the medical care of the animals there with the head veterinarian.",
      groups: [
        { images: ["vtvolunteer_1.jpg","vtvolunteer_2.jpg","vtvolunteer_4.jpg","vtvolunteer_5.jpg","vtvolunteer_6.jpg","vtvolunteer_8.jpg"] }
      ]
    },
    {
      id: "childhood",
      when: "As early as I can remember",
      title: "I have had a love for animals as early as I can remember",
      intro: "I grew up in suburban Connecticut near a tidal river, and the exposure to wildlife was abundant. Whether it was feeding the ducks, watching the blue herons feed from my kayak on the river, or rescuing the baby snapping turtles that got washed out in rain storms, I was constantly tied to the nature around me.",
      groups: [
        { images: ["butterfly_kid.jpg","chickens.jpg","turtle_kid.jpg","horseback_kid.jpg"] }
      ]
    },
    {
      id: "dogs",
      when: "Always",
      title: "My Dogs!",
      intro: "And of course I love my rescue dogs. All of our family pets were rescued, and each one had their own personality: Barkley and Titus, and our two pups with us now, Wheezy and Ash.",
      groups: [
        { images: ["wheezy_1.jpg","titus_1.jpg","barkley.jpg","ash_1.jpg"] }
      ]
    }
  ]
};
