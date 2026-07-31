// ------------------------------------------------------------------
// 📌 ไฟล์นี้คือ "คลังข้อมูล" ของพอร์ตทั้งหมด
// อยากแก้ไขข้อความ / เพิ่มโปรเจกต์ / เพิ่มกิจกรรม ให้มาแก้ที่ไฟล์นี้ไฟล์เดียว
// ไม่ต้องไปยุ่งกับไฟล์อื่นเลย (รูปแบบข้อมูลเหมือนไฟล์ content.ts เวอร์ชัน React เป๊ะ ๆ)
// ------------------------------------------------------------------

export const heroContent = {
  name: "Aniwat Sangadram",
  greeting: "I'm Aniwat Sangadram",
  tagline:
    "นักศึกษาคณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์มุ่งเน้นวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์ มหาวิทยาลัยกรุงเทพ มีความสนใจในงานสาย Network และ Cybersecurity",
};

export const nodesContent = [
  {
    id: "about",
    label: "About Me",
    icon: "User",
    color: "#2F6F63",
    summary:
      "",
    image: "images/about/757304384_2225504331624298_4221306178797871152_n.jpg",
    full: {
      heading: "About Me",
      body: [
        "นักศึกษาคณะเทคโนโลยีสารสนเทศและนวัตกรรม สาขาวิทยาการคอมพิวเตอร์มุ่งเน้นวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์ มหาวิทยาลัยกรุงเทพ เน้นศึกษาด้าน Data Science และ Cybersecurity มีความสนใจในงานสาย Network และ Security พร้อมเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ ปัจจุบันพัฒนาทักษะเพื่อก้าวสู่สายงานทั้ง Network และ Security",
      ],
      meta: [
        { label: "ชื่อ", value: "อนิวัตติ์ สงัดรัมย์" },
        { label: "สถาบัน", value: "มหาวิทยาลัยกรุงเทพ" },
        { label: "คณะ", value: "เทคโนโลยีสารสนเทศและนวัตกรรม" },
        { label: "สาขา", value: "วิทยาการคอมพิวเตอร์ มุ่งเน้นวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์" },
        { label: "เกรดเฉลี่ย", value: "3.43" },
      ],
      // ★ Technical Skills (แบ่งเป็นหมวดย่อย) + Soft Skills — แสดงเป็น 2 คอลัมน์คั่นด้วยเส้นกลาง
      skills: {
        technical: [
          {
            heading: "ภาษาด้านคอมพิวเตอร์",
            items: ["Python", "SQL", "JavaScript", "HTML / CSS"],
          },
          {
            heading: "เฟรมเวิร์คและไลบรารี และฐานข้อมูล",
            items: ["React", "Next.js", "Tailwind CSS", "MySQL"],
          },
          {
            heading: "เครื่องมือและเทคโนโลยีที่ใช้",
            items: ["Kali Linux (OS)", "Windows Server (OS)", "Network Scanning & Penetration Testing Concepts"],
          },
          {
            heading: "ชื่อโปรแกรมที่ใช้",
            items: ["Nmap", "Burp Suite", "Metasploit", "Visual Studio Code", "Figma", "Microsoft Word"],
          },
          {
            heading: "ภาษาที่สื่อสารได้",
            items: ["ภาษาไทย(Native)", "ภาษาอังกฤษ(Intermediate)"],
          },
        ],
        soft: [
          "การแก้ปัญหาอย่างเป็นระบบ",
          "การทำงานเป็นทีม",
          "การสื่อสาร",
          "การบริหารเวลา",
          "การปรับตัวและความยืดหยุ่น",
          "ความคิดสร้างสรรค์",
          "การเรียนรู้ตลอดเวลา",
          "ความใส่ใจในรายละเอียด",
          "ทัศนคติเชิงบวก",
          "ความเห็นอกเห็นใจผู้อื่น",
        ],
      },
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: "FolderKanban",
    color: "#3B6EA5",
    summary:
      "",
    full: {
      heading: "Projects",
      body: [],
      tags: [],
    },
    items: [
      {
        id: "project-1",
        title: "Network Topology Visualization and Cybersecurity Deep Insight System",
        summary: "ระบบแสดงผังโครงสร้างเครือข่ายและวิเคราะห์เชิงลึกด้านความมั่นคงปลอดภัยไซเบอร์",
        images: [
          "images/projects/PJ121.png",
          "images/projects/PJ122.png",
          "images/projects/PJ123.png",
          "images/projects/PJ124.png",
        ],
        body: [
          "โปรเจกต์นี้เป็นหนึ่งในวิชา CS497 Computer Science Project I และ CS498 Computer Science Project II จะเป็นการรับโจทย์จริงจากบริษัท โดยโปรเจกต์นี้ใช้ระยะเวลา 2 เทอม แบ่งกลุ่ม 5-6 คน",
          "กลุ่มเรากำลังพัฒหาระบบแสดงผังโครงสร้างเครือข่ายและวิเคราะห์เชิงลึกด้านความมั่นคงปลอดภัยไซเบอร์ เพื่อตรวจสอบความปลอยภัยในเครือข่าย เช่น มีอุปกรณ์แปลกปลอมเข้ามาในเครือข่าย และฟังก์ชันต่างๆ ฟังก์ชันการสแกนเครือข่าย ฟังก์ชัน AI สามารถสั่งงานด้วยเสียงพูดทันที",
          "หน้าที่ความรับผิดชอบ: ผมรับหน้าที่เป็น ui/ux design และ Network ออกแบบ UI/UX ด้วย Figma และได้ศึกษาเกี่ยวกับระบบเครือข่ายเพื่อนำมาใช้งานกับโปรเจกต์",
          "ขั้นตอนการทำงาน:",
          "1.รับโจทย์จากบริษัท และ Requirement ที่บริษัท เช่น ฟังก์ชันต่างๆ",
          "2.ศึกษาเกี่ยวกับ Network เช่น การสแกนเครือข่าย การสแกนความเสี่ยง การแสดงผล",
          "3.ออกแบบหน้าตาและ Flow การใช้งานด้วย Figma ตั้งแต่หน้า Login, Dashboard, Scan",
          "4.เขียนโปรแกรม Demo ด้วย HTML, CSS, JavaScript, Python, Flask, Python-nmap, MySQL, Web Speech API และ Open ai API",
          "5.จัดทำเอกสารรายงานตั้งแต่ บทนำ, ทฤษฎีและความรู้ต่างๆที่ใช้ประกอบในการทำโครงงาน การวิเคราะห์และออกแบบระบบ",
          "6.ทดสอบการใช้งานและนำเสนอความคืบหน้าเพื่อมาปรับปรุงแก้ไข",
          "สิ่งที่ได้รับ: ได้ฝึกออกแบบ UI/UX ผ่าน Figma ก่อนนำมาพัฒนาเป็นเว็บจริง ได้เรียนรู้เกี่ยวกับ Network ต่างๆ กระบวนการทำงาน การสแกนเครือข่าย การสแกนความเสี่ยง การแสดงผลว่าจะแสดงผลยังไงให้มีประสิทธิภาพให้ผู้ใช้เข้าใจ รวมถึงได้ฝึกทักษะการทำงานร่วมกันเป็นทีม แบ่งงาน และประสานงานกับเพื่อนร่วมทีม",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL", "Network"],
      },
      {
        id: "project-2",
        title: "Pentest Report",
        summary: "รายงานผลการทดสอบเจาะระบบ Penetration Test แบบ Black Box บนแพลตฟอร์ม Offsec Proving Grounds จำนวน 5 เป้าหมาย สามารถเจาะระบบและยกระดับสิทธิ์เป็น Root ได้สำเร็จครบทุกเครื่อง",
        images: [
          "/images/projects/Pentest_Report_Page_03.jpg",
          "/images/projects/Pentest_Report_Page_04.jpg",
          "/images/projects/Pentest_Report_Page_05.jpg",
          "/images/projects/Pentest_Report_Page_23.jpg",
          "/images/projects/Pentest_Report_Page_24.jpg",
        ],
        body: [
          "โปรเจกต์นี้เป็นการฝึกปฏิบัติ Penetration Testing แบบ Black Box Testing บนเครื่องเป้าหมายจำลอง Offsec Proving Grounds จำนวน 5 เครื่อง โดยจำลองสถานการณ์ผู้โจมตีที่ไม่มีข้อมูลหรือสิทธิ์เข้าถึงระบบมาก่อน",
          "หน้าที่ความรับผิดชอบ: รับผิดชอบการทดสอบเจาะระบบเป้าหมาย DC-1 ตั้งแต่การสแกนช่องโหว่ การหา Exploit ไปจนถึงการยกระดับสิทธิ์เป็น Root รวมถึงช่วยเพื่อนร่วมทีมในการจัดทำเอกสารรายงาน",
          "ขั้นตอนการทำงาน:",
          "1.สแกนหาช่องโหว่ด้วย Nessus เพื่อจัดระดับความรุนแรง Critical, High, Medium, Low",
          "2.ทดสอบเจาะระบบด้วยเครื่องมือต่างๆ เช่น Nmap, Gobuster, Dirb, Metasploit และ Exploit-DB",
          "3.ยกระดับสิทธิ์ เพื่อเข้าถึงสิทธิ์สูงสุดของระบบ",
          "4.สรุปผลและจัดทำข้อเสนอแนะแนวทางแก้ไข สำหรับแต่ละช่องโหว่",
          "สิ่งที่ได้รับ: ได้ลงมือใช้โปรแกรมด้าน Security เช่น Nessus, Nmap, Metasploit ทำให้เข้าใจว่าแต่ละเครื่องมือใช้ทำอะไร ได้ฝึกคิดแบบผู้โจมตี ลองจนกว่าจะหาทางเข้าระบบได้ และได้เรียนรู้วิธีเขียนรายงานสรุปผล",
        ],
        tags: ["Penetration Testing", "Nessus", "Metasploit"],
        pdf: { label: "เปิดไฟล์ PDF", url: "/files/Pentest_Report.pdf" },
      },
      {
        id: "project-3",
        title: "Number Guessing Game",
        summary: "เว็บแอปพลิเคชันเกมทายตัวเลข พร้อมระบบสมัครสมาชิกระบบล็อกอิน และระบบจัดอันดับคะแนน Top List แยกตามระดับความยาก พัฒนาด้วย Spring Boot", 
        images: [
          "/images/projects/NGG1.png",
          "/images/projects/NGG2.png",
          "/images/projects/NGG3.png",
          "/images/projects/NGG4.png",
          "/images/projects/NGG5.png",
          "/images/projects/NGG6.png",
          "/images/projects/NGG7.png",
          "/images/projects/NGG8.png",
          "/images/projects/NGG9.png",
          "/images/projects/NGG10.png",
        ],
        body: [
          "โปรเจกต์นี้เป็นงานกลุ่ม 2 คน พัฒนาเกมทายตัวเลข 1-100 ผ่านเว็บแอปพลิเคชัน โดยมีระบบสมาชิก แบ่งระดับความยาก 3 ระดับ Easy, Medium, Hard พร้อมระบบบันทึกและแสดงอันดับคะแนนผู้เล่น",
          "หน้าที่ความรับผิดชอบ: ออกแบบ UI/UX ด้วย Figma ออกแบบระบบและระบบการเล่นเกม รวมถึงเขียนโค้ดพัฒนาระบบร่วมกับเพื่อนร่วมทีม",
          "ขั้นตอนการทำงาน:",
          "1.ออกแบบหน้าตาและ Flow การใช้งานด้วย Figma ตั้งแต่หน้า Welcome, Sign up, Login จนถึงหน้าเล่นเกม",
          "2.ออกแบบระบบเกม กำหนดกติกาและจำนวนโอกาสในการทายของแต่ละระดับความยาก Easy 7 ครั้ง, Medium 5 ครั้ง, Hard 3 ครั้ง",
          "3.พัฒนา Backend ด้วย Spring Boot จัดการระบบ Authentication และ Database H2 สำหรับเก็บข้อมูลผู้ใช้และคะแนน",
          "4.พัฒนา Frontend ด้วย HTML, CSS, JavaScript เชื่อมต่อกับ Backend ผ่าน Controller Auth, Game, Score",
          "5.ทดสอบการใช้งานและจัดทำคู่มือการใช้งานสำหรับผู้เล่น",
          "สิ่งที่ได้รับ: ได้ฝึกออกแบบ UI/UX ผ่าน Figma ก่อนนำมาพัฒนาเป็นเว็บจริง ได้เรียนรู้การพัฒนาเว็บแอปพลิเคชัน ด้วย Spring Boot ตั้งแต่ฝั่ง Backend ไปจนถึง Frontend รวมถึงได้ฝึกทักษะการทำงานร่วมกันเป็นทีม แบ่งงาน และประสานงานกับเพื่อนร่วมทีม",
        ],
        tags: ["Java", "Spring Boot", "Figma"],
        link: { label: "ดูดีไซน์บน Figma", url: "https://www.figma.com/design/ULgcvz6IllPjsezNkRD7xk/NUMBERGUESSINGGAME?node-id=0-1&t=G9crwTc1q5MLugsN-1" },
      },
    ],
  },
  {
    id: "activities",
    label: "Activities",
    icon: "Award",
    color: "#8A5CB8",
    summary: "กิจกรรมและผลงานที่ผมเข้าร่วม/มีส่วนร่วม ทั้งในและนอกห้องเรียน — เลือกดูได้จากรายการด้านข้าง",
    full: {
      heading: "Activities and Contributions",
      body: [],
      tags: [],
    },
    items: [
      {
        id: "activity-1",
        title: "BU Cyber Fortress Challenge & Career Expo",
        summary: "เข้าร่วมกิจกรรม BU Cyber Fortress Challenge & Career Expo เข้าร่วมฟังสัมมนาและเดินชมบูธบริษัทต่างๆ ในโซน Career Expo พูดคุยกับ HR พร้อมให้ความรู้การเตรียมตัวต่าง ๆ เช่น การทำ Resume, การเตรียมตัวสัมภาษณ์",
        images: ["images/activities/activity-1.jpg"],

      },
      {
        id: "activity-2",
        title: "IT Empowering Day: in the Era of AI",
        summary: "เข้าร่วมกิจกรรม IT Empowering Day: in the Era of AI เข้าร่วมฟังสัมมนาและเดินชมบูธบริษัทที่กำลังหานักศึกษาฝึกงานเข้าทำงานด้วยและพูดคุยกับ HR พร้อมให้ความรู้การเตรียมตัวต่าง ๆ เช่น การทำ Resume, การเตรียมตัวสัมภาษณ์",
        images: ["images/activities/activity-2.jpg"],
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: "BadgeCheck",
    color: "#B4553F",
    summary: "ใบรับรองที่ช่วยยืนยันความรู้และทักษะที่ผมสั่งสมมา — เลือกดูได้จากรายการด้านข้าง",
    full: {
      heading: "Certifications",
      body: [],
      tags: [],
    },
    items: [
      {
        id: "cert-1",
        title: "หลักสูตรด้านความมั่นคงปลอดภัยไซเบอร์ระดับพื้นฐาน",
        summary: "",
        images: ["images/certifications/0870038612XS.jpg"],
        body: [
          "",
        ],
        tags: ["NCSA", "THNCA", "Cybersecurity"],
      },
      {
        id: "cert-2",
        title: "หลักสูตรผู้เชี่ยวชาญเฉพาะด้าน การทดสอบเจาะระบบ",
        summary: "",
        images: ["images/certifications/7498741300XS.jpg"],
        body: [
          "",
        ],
        tags: ["NCSA", "THNCA", "Penetration Testing"],
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    icon: "Mail",
    color: "#C97B4A",
    summary: "",
    full: {
      heading: "Contact",
      body: [
        "",
      ],
      contactLinks: [
        { icon: "User", 
          label: "Name", 
          value: "Aniwat Sangadram" },
        {
          icon: "Mail",
          label: "Email",
          value: "nack.aniwat@gmail.com",
        },
        { icon: "Phone", label: "โทรศัพท์", value: "082-336-2621"},
        {
          icon: "Github",
          label: "GitHub",
          value: "https://github.com/aniwatsanga",
          href: "https://github.com/aniwatsanga",
        },
      ],
    },
  },
];
