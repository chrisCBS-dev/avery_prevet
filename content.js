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
      intro: "The week after my 18th birthday, I sat for, and passed, the Connecticut State Wildlife Rehabilitator exam and earned my license. It led to a set of experiences that solidified my ambition to work in the animal sciences. I spent the spring and summer under the supervision of Call of the Wild CT, where I rehabilitated an abandoned juvenile fox and 3 infant raccoons.",
      groups: [
        {
          title: "Rehabilitation of Red Fox (Rudy)",
          caption: "I spent 3 months managing medical treatment, feeding and sheltering an infant fox abandoned by his family, under the supervision of Call of the Wild CT. I was amazed by how attached the fox became to me. We developed a connection I was not expecting.",
          video: "fox_video.mp4",
          images: ["fox_1.jpg", "fox_2.jpg", "fox_3.jpg", "fox_4.jpg"]
        },
        {
          title: "Rehabilitation of Newborn Raccoons",
          caption: "While I was caring for Rudy, I also nursed 3 infant raccoons, starting with bottle feeding. By the time I left for college, they were eating solid foods and able to run freely in the yard.",
          images: ["racoons_1.jpg", "racoons_2.jpg", "racoons_4.jpg"]
        }
      ]
    },
    {
      id: "vt",
      when: "Freshman year",
      title: "Volunteering at Virginia Tech",
      intro: "The CT wildlife rehabilitation experience was so foundational for me that I immediately sought out opportunities to volunteer in my freshman year at Virginia Tech. Several times a week (when I can get a ride), I volunteer at the Pulaski County Humane Center.",
      groups: [
        { images: ["vtvolunteer_1.jpg","vtvolunteer_2.jpg","vtvolunteer_3.jpg","vtvolunteer_4.jpg","vtvolunteer_5.jpg","vtvolunteer_6.jpg","vtvolunteer_7.jpg","vtvolunteer_8.jpg","vtvolunteer_9.jpg"] }
      ]
    },
    {
      id: "childhood",
      when: "As early as I can remember",
      title: "I have had a love for animals as early as I can remember",
      intro: "I grew up in suburban Connecticut near a tidal river, and the exposure to wildlife was abundant: blue herons, crabs, deer, coyotes, raccoons, osprey and turtles, to name a few. A bald eagle nests here as well. Truly an amazing bird. I spent many weekends on my kayak on the river.",
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
