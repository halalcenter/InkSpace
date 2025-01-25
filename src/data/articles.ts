export interface Article {
    title: string;
    content: string;
    excerpt: string;
    coverImage: string;
    contentImages?: string[];
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    publishDate: string;
    isLatestNews: boolean;
}

export const articles: Record<string, Article> = {
    "future-of-ai": {
        title: "The Future of AI in Daily Life",
        excerpt: "Exploring how artificial intelligence is reshaping our everyday experiences and what to expect in the coming years.",
        coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        contentImages: [
            "https://images.unsplash.com/photo-1676299081847-824916de6978",
            "https://images.unsplash.com/photo-1675557009875-436f7a5c6f3d"
        ],
        author: {
            name: "Divya Singh",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            role: "Student"
        },
        publishDate: "2024-04-10",
        isLatestNews: true,
        content: `
            <p>Artificial Intelligence is rapidly becoming an integral part of our daily lives, transforming how we work, communicate, and live. From smart home devices to personalized recommendations, AI's influence continues to grow.</p>
            
            <img src="https://images.unsplash.com/photo-1676299081847-824916de6978" alt="AI visualization" />
            
            <p>Recent advances in machine learning have led to more sophisticated AI systems that can understand natural language, recognize images, and even create art. These developments are not just technological achievements; they're reshaping our society in fundamental ways.</p>
            
            <img src="https://images.unsplash.com/photo-1675557009875-436f7a5c6f3d" alt="AI and human interaction" />
            
            <p>As we look to the future, experts predict AI will play an even more significant role in healthcare, education, and environmental protection. However, this technological revolution also raises important questions about privacy, ethics, and the future of human work.</p>
        `
    },
    "sustainable-living": {
        title: "Sustainable Living: A Practical Guide",
        excerpt: "Simple steps and practical tips for adopting a more environmentally conscious lifestyle in today's world.",
        coverImage: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39",
        contentImages: [
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
            "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1"
        ],
        author: {
            name: "Maya Patel",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            role: "Environmental Journalist"
        },
        publishDate: "2024-04-09",
        isLatestNews: true,
        content: `
            <p>Living sustainably doesn't have to be complicated or expensive. Small changes in our daily habits can make a significant impact on our environmental footprint.</p>
            
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" alt="Sustainable living" />
            
            <p>From reducing single-use plastics to choosing energy-efficient appliances, there are numerous ways to contribute to a healthier planet. This guide explores practical steps anyone can take to live more sustainably.</p>
            
            <img src="https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1" alt="Green energy" />
            
            <p>We'll also discuss the importance of conscious consumption, waste reduction, and supporting eco-friendly businesses in building a more sustainable future.</p>
        `
    },
    "csds": {
        title: "csds syallabus",
        excerpt: "",
        coverImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentImages: [],
        author: {
            name: "ADITYA D",
            avatar: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            role: "GDP LEAD"
        },
        publishDate: "2024-11-30",
        isLatestNews: false,
        content: `
            <h1>1ST SEMESTER</h1>
            <h3>Intriductry Topics in Statistics, Probabilty and Calculas(CD-101)</h3>
            <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; "> Unit-I Introduction to Statistics</a></p>
            <p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-II Descriptive Statistics</a></p>
 <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-III Probability</a></p>
<p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-IV Probability distributions</a></p>
 <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-V Calculus</a></p>
 <h3>Intriductry Topics in Statistics, Probabilty and Calculas(CD-101)</h3>
            <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; "> Unit-I Introduction to Statistics</a></p>
            <p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-II Descriptive Statistics</a></p>
 <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-III Probability</a></p>
<p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-IV Probability distributions</a></p>
 <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-V Calculus</a></p>


        `
    },
    "nvidia-digits": {
        title: "NVIDIA Project DIGITS",
        excerpt: "NVIDIA unveiled NVIDIA® Project DIGITS as World’s Smallest AI Supercomputer, Powered by the NVIDIA GB10",
        coverImage: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
        contentImages: [
            "https://www.nvidia.com/content/nvidiaGDC/us/en_US/project-digits/home/_jcr_content/root/responsivegrid/nv_container_1505625997/nv_image.coreimg.100.850.jpeg/1736209420500/nvidia-project-digits-exploded-vew-ari.jpeg",
            "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20250/project-digits.png",
            "https://cdn.wccftech.com/wp-content/uploads/2025/01/NVIDIA-CEO-Jensen-Huang-Keynote-at-CES-2025-1-25-28-screenshot.png"
        ],
        author: {
            name: "Aditya Dixit",
            avatar: "https://lh3.google.com/u/2/d/1SxA0garJmTa6wR67R2Vkrq3rQIcNmtER=w1173-h927-iv2",
            role: "GDP LEAD"
        },
        publishDate: "2025-01-25",
        isLatestNews: true,
        content: `
            <p>Powered by the NVIDIA GB10 Grace Blackwell Superchip, Project DIGITS as World’s Smallest AI Supercomputer capable of  delivering a petaflop of AI performance in a power-efficient, compact form factor.
            With the NVIDIA AI software stack preinstalled and 128GB of memory, developers can prototype, fine-tune, and inference large AI models of up to 200B parameters locally, and seamlessly deploy to the data center or cloud.</p>
            
            <img src="https://www.nvidia.com/content/nvidiaGDC/us/en_US/project-digits/home/_jcr_content/root/responsivegrid/nv_container_1505625997/nv_image.coreimg.100.850.jpeg/1736209420500/nvidia-project-digits-exploded-vew-ari.jpeg" alt="GB10" />
            
            <p>NVIDIA unveiled NVIDIA® Project DIGITS, a personal AI supercomputer that provides AI researchers, data scientists and students worldwide with access to the power of the NVIDIA Grace Blackwell platform.
            Project DIGITS features the new NVIDIA GB10 Grace Blackwell Superchip, offering a petaflop of AI computing performance for prototyping, fine-tuning and running large AI models.</p>
            
            <img src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20250/project-digits.png" alt="DIGITS" />
            
            <p>With Project DIGITS, users can develop and run inference on models using their own desktop system, then seamlessly deploy the models on accelerated cloud or data center infrastructure.
            “AI will be mainstream in every application for every industry. With Project DIGITS, the Grace Blackwell Superchip comes to millions of developers,” said Jensen Huang, founder and CEO of NVIDIA.
            “Placing an AI supercomputer on the desks of every data scientist, AI researcher and student empowers them to engage and shape the age of AI.”</p>

            <h3>GB10 Superchip Provides a Petaflop of Power-Efficient AI Performance</h3>
            <p>The GB10 Superchip is a system-on-a-chip (SoC) based on the NVIDIA Grace Blackwell architecture and delivers up to 1 petaflop of AI performance at FP4 precision.
            GB10 features an [NVIDIA Blackwell GPU](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/) with latest-generation CUDA® cores and 
            fifth-generation [Tensor Cores](https://www.nvidia.com/en-us/data-center/tensor-cores/), connected via [NVLink®-C2C](https://www.nvidia.com/en-us/data-center/nvlink-c2c/) 
            chip-to-chip interconnect to a high-performance NVIDIA Grace™ CPU, which includes 20 power-efficient cores built with the Arm architecture. MediaTek, a market leader
            in Arm-based SoC designs, collaborated on the design of GB10, contributing to its best-in-class power efficiency, performance and connectivity.</p>

            <img src="https://cdn.wccftech.com/wp-content/uploads/2025/01/NVIDIA-CEO-Jensen-Huang-Keynote-at-CES-2025-1-25-28-screenshot.png" alt="Super Computer" />

            <h3>Grace Blackwell AI Supercomputing Within Reach</h3>
            <p>With the Grace Blackwell architecture, enterprises and researchers can prototype, fine-tune and test models on local Project DIGITS systems running Linux-based NVIDIA
            DGX OS, and then deploy them seamlessly on [NVIDIA DGX Cloud](https://www.nvidia.com/en-us/data-center/resources/?ncid=no-ncid)™, accelerated cloud instances or data center infrastructure.
            This allows developers to prototype AI on Project DIGITS and then scale on cloud or data center infrastructure, using the same Grace Blackwell architecture and the
            [NVIDIA AI Enterprise](https://www.nvidia.com/en-us/data-center/products/ai-enterprise/) software platform.</p>

            <h3>Availability</h3>
            <p>Project DIGITS will be available in May from NVIDIA and top partners, starting at $3,000.</p>
        `
    },
        "Google Developers Group(GDG)": {
        title: "Google Developers Group",
        excerpt: "Google Developer Groups (GDGs) bring together developers and technologists to connect, learn, and grow alongside Google's technologies and experts. These groups support innovation and growth in the tech world by providing opportunities to learn, share knowledge, and collaborate",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJ20Y03jPHKxgQ2HXQ36tGm9u62u4pedvpA&s",
        contentImages: [
            "https://images.unsplash.com/photo-1676299081847-824916de6978",
            "https://images.unsplash.com/photo-1675557009875-436f7a5c6f3d"
        ],
        author: {
            name: "GDG SOIT",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJ20Y03jPHKxgQ2HXQ36tGm9u62u4pedvpA&s",
            role: "CLUB"
        },
        publishDate: "2025-01-20",
        isLatestNews: false,
        content: `
            <h2>What is GDG? and how is this related with Google.</h2>
            
            <p>Google Developers Group (GDG) on campus, School of Information Technology, Bhopal is a part of the Google Developers Group (GDG), a global community of tech enthusiasts initiated by Google, spanning across 140 countries. It’s not just about coding; it’s about learning, exploring, and sharing technology. GDG brings together people who love to learn and experiment with various technologies, especially those associated with Google. Whether it’s advanced topics like cloud computing or something as fundamental as debugging code, GDG has got you covered.</p>
            
            <img src="https://media.licdn.com/dms/image/v2/D4D3DAQGcBFpDF0iiRQ/image-scale_191_1128/image-scale_191_1128/0/1691916129574/google_developer_student_clubs_soit_rgpv_cover?e=2147483647&v=beta&t=WUwkQgTY8EGcnz3FxfNFe9adFNvzDcI0RO0yN6Qx3bE" />
           
           
           
            <h2>Study jam - Build with AI</h2>
            <p>Recently, GDG introduced an exciting educational initiative called Google Build with AI Study Jam, designed to help developers dive into the world of artificial intelligence. The program garnered immense interest, with over 200 applications received for participation. It was a month long google cloud experience program in the format of learn and earn.</p>
            
            <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/study-jam%20logo_UkyLUs8.png" />
            



            <h2>Why to join GDG community.</h2>

            <p>Being a part of the GDG community is more than just learning; it’s about staying connected with like-minded individuals and accessing countless opportunities to grow in the tech domain. If you’re passionate about technology and want to explore the fascinating world of AI, GDG is the perfect community for you. Stay tuned for upcoming events and workshops—exciting things are on the way!</p>


            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoCWPOOARwVrw0QOllRAi6Zifjtbr6myXpg&s" />
        `
    },
        "Fibonacci SoIT": {
        title: "Fibonacci CLUB",
        excerpt: "Fibonacci is a rapidly growing coding community dedicated to empower developers and encouraging a culture of continuous learning",
        coverImage: "https://lh3.google.com/u/0/d/1KMdIxwxDwZpZA0tGd2JST6dwHZqH2X7l=w1920-h877-iv1",
            contentImages: [
            "https://lh3.google.com/u/0/d/1KMdIxwxDwZpZA0tGd2JST6dwHZqH2X7l=w1920-h877-iv1",
            "https://lh3.google.com/u/2/d/1a19iZLdwif1xZG6mWDvcbgQU6KveMT75=w1173-h927-iv1",
            "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda"
        ],
            author: {
            name: "Fibonacci SoIT",
            avatar: "https://lh3.google.com/u/0/d/1KMdIxwxDwZpZA0tGd2JST6dwHZqH2X7l=w1920-h877-iv1",
            role: "CLUB"
        },
        publishDate: "2025-01-15",
        isLatestNews: false,
        content: `
            <h2>What is FIbonacci?</h2>
            <pFibonacci is a rapidly growing coding community dedicated to empower developers and encouraging a culture of continuous learning.
            Fibonacci aims to provide a comprehensive learning environment where members can enhance their coding skills, exchange knowledge, and solve complex algorithmic challenges.</p>
            
            <h2>GeeksforGeek</h2>
            <p>Sparking innovation through code! In partnership with Geeks for Geeks!

            GeeksforGeeks is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts,With a vision to bridge the gap between theory and individual GeeksforGeeks upholds its motto:.</p>
            
            <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" />
            <h2>FIBOHACK 1.0</h2>
            <img src="https://lh3.google.com/u/2/d/1a19iZLdwif1xZG6mWDvcbgQU6KveMT75=w1173-h927-iv1" alt="fibohack1.0" />
            <p>Fibonacci recently organized a highly successful event, FiboHack 1.0 The Ultimate Hackathon, proudly sponsored by GeeksForGeeks. The event brought together 100+ participants from several prestigious colleges, including LNCT, Oriental, and more. Participants tackled real-world challenges across diverse domains such as Women's Safety, Education, Sustainability, and Civic Engagement.
            The hackathon was a perfect blend of innovation, excitement, and learning, featuring an engaging webinar on 'Web Development with Al,' which provided valuable insights to all attendees. Participants not only got the chance to showcase their skills but also had amazing opportunities to connect and network with like-minded individuals, industry experts, and mentors.
            To add to the thrill, participants walked away with exciting goodies and swags, including keyboards, hoodies, t-shirts, mouse pads, medals, and trophies. The event was a resounding success, fostering collaboration, technical excellence, and an unforgettable experience for all involved.</p>
            <img src="https://t3.ftcdn.net/jpg/05/31/07/52/360_F_531075272_uaIv5KEd3L0YGc3uLixoAe34qfgOTNRl.jpg" />
            <h2>Upcoming Events :</h2>
            <h3>--> Web development Worksho.</h3>
            <h3>--> Weekly coding challenges.</h3>
            <h3>--> DSA courses by GeeksforGeeks.</h3>
            <h3>--> Graphic designing Mentorship programs.</h3>
            <h3>--> Networking events.</h3>

            <h2>How to Join?</h2>
            <h3>Become a part of Fibonacci SOIT and enhance your coding journey</h3>

            <p> 1. Register Online. 
            Visit our website to complete your registeration easily.</p>
            <p> 2. Attend the Intro session.
            Join our first session to gain insights about the club and meet fellow coding enthusiasts.</p>
            <p> 3. Stay updated. 
            Follow our social media for the latest news and updates. Connect with the community!</p>
            <p> 4. Open to everyone.
            We welcome all coding enthusiasts, regardless of skill level. Join us to learn and grow.</p>
        `
    },
    "code4all": {
        title: "Code4All",
        excerpt: "Official Coding Club of RGPV, we are a passionate community of programmers aiming to transform code-related anxiety and apprehension into inspiration and motivation for learning.",
        coverImage: "https://lh3.google.com/u/2/d/1x8OwUj_Jz0NEaPRFzLkqnJTte2rcuU4g=w1173-h907-iv1",
        contentImages: [
            "https://www.instagram.com/p/CH-lVCRpOOe/?utm_source=ig_web_copy_link",
            "http://www.hackerrank.com/c4a05",
            "https://www.instagram.com/p/CL9cSaOpWMQ/",
            "http://www.hackerrank.com/c4a05",
            "https://www.instagram.com/p/CZKCm0WvqW8/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/DAo6xrHIio1/"
        ],
        author: {
            name: "Code4All",
            avatar: "https://lh3.google.com/u/2/d/1x8OwUj_Jz0NEaPRFzLkqnJTte2rcuU4g=w1173-h907-iv1",
            role: "CLUB"
        },
        publishDate: "2025-01-09",
        isLatestNews: false,
        content: `
            <h2>Code your way to success</h2>
            <p>Enhance the way you code, accelerate your coding journey and achieve success with us.
            Code4All enthusiastic group of coders. We want to replace code anxiety and fear with inspiration and motivation to learn.
            Our team comprises of problem setters, web developers, app developers, blockchain developers, administration managers, operation handlers, graphic designers, content curators and video editors.</p>

            <h2>What is Code4All</h2>
            <p>Official Coding Club of RGPV, we are a passionate community of programmers aiming to transform code-related anxiety and apprehension into inspiration and motivation for learning.
            Our team includes individuals responsible for problem setting, technical aspects, administration/operations, graphic design, content curation, and video editing.</p>
            
            <h2>Why Code4All Club?</h2>
            <p>"Unlock success through coding with Code4All! Elevate your coding skills, accelerate your coding journey, and achieve greatness with us."</p>

            <h3>Motto</h3>
            <p>Code4All is having a very clear vision to encourage students towards Coding. We are working together only to enhance the coding culture among students.</p>
            <h3>Contests</h3>
            <p>Attend all the contests; rise or fall doesn't matter learn from your last one and rock on the next. We organize coding contests in every 15 days.</p>
            <h3>Editorials</h3>
            <p>Editorials to all the problems are available on our Github Account. In all the forthcoming contests, editorials shall be available just after the contest.</p>

            <h2>Past Events and Contests organized by Code4All</h23>
            <h3>Coding contests</h3>
            <img src="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.29350-15/127186925_3756607161024602_1469148815137518562_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=pgNyAHUnLaEQ7kNvgG06Xhk&_nc_gid=bcf7bb1c32f0489bae6033b3a544bfc6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjQ0OTU1OTQxNjcwODg1MTEzMg%3D%3D.3-ccb7-5&oh=00_AYCnvtfhlsn7jakaNSfj-MHy5y4Szi7r4o9IT4PyX7e-kA&oe=679AABE4&_nc_sid=10d13b" alt="coding contest" />
            <p>Coding contests organized by the Code4All Club are typically designed to encourage programmers of all skill levels to test their skills,
            collaborate, and learn from each other. These contests often include a variety of challenges to suit diverse interests and expertise.
            Code4All club has organized a big number of 13 coding contest in the past on the hacker rank. </p>
            <a src="http://www.hackerrank.com/c4a05">1st coding contest organized by the club on HackerRank</a>
            <h3>She Codes.</h3>
            <img src="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.29350-15/156526193_262544138646195_8971404363099998418_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=MwXw1Lmm0sUQ7kNvgGs8jq8&_nc_gid=2276ad27a9194255b4fcd1c70ef8282e&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjUyMTI5NTc3NjgxMzI0NTIwMA%3D%3D.3-ccb7-5&oh=00_AYCbYmElZzE5EVQbPM6hB5svfiY-qlWk9mkxbfPyKjZ9HQ&oe=679AB235&_nc_sid=10d13b" alt="She codes" />
            <p>Code4All applauds the achievements of women who have ventured on their path of Competitive Programming.
            On the auspicious occasion of International Women’s Day for the honor of women who code Code4All brings
            SheCodes an exclusive coding contest for the girls. Code4All club has organized a total of two SheCodes in the past on the hacker rank.</p>
            <a href="http://www.hackerrank.com/c4a05">SheCodes on HackerRank</a>
            <h3>REACT DRIFT</h3>
            <img src="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.29350-15/272504453_166570345697862_7280861745854123866_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDEyODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=MxK5C_VXCpIQ7kNvgFaMmj-&_nc_gid=4aa98a5d3d6045cd96fb208785a11d74&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc1OTAyOTE4MDg4NzU5NjE4OA%3D%3D.3-ccb7-5&oh=00_AYBGrpfh5ZQrwvRm-8tvUyRWhZIhVaKIo9duAIzTp10WZg&oe=679AC343&_nc_sid=10d13b" alt="react drift" />
            <p>This time Code4All came up with an exquisite development contest series to upskill the technical abilities of the students in the form of React Drift.</p>
            <p>1. React Drift was a front-end development contest using React.js, where all the participants were given online resources to learn React.js
            and a whatsapp group was created to clear the doubts of the participants, once the participant were comfortable with library, they’d to make a portfolio app and also host it on web</p>
            <p>2. React Drift was not just any development contest, it was full-fledged learning Bootcamp program, while the only pre-requisite for the event was learning attitude, “once you’re open to learning, the learning becomes very easy”.</p>
            <h3>HACKTOBERFEST</h3>
            <img src="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.29350-15/461759418_1056396372538854_1895379103501106538_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=E6HBh7K9hO8Q7kNvgG8LqRq&_nc_gid=067cf60ba63d4e96ade8951dca1b8656&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQ3MDI4MjAxMzEzMTU0OTIzNw%3D%3D.3-ccb7-5&oh=00_AYB09B2WZ6M0i8r8ilvpuc_b-flHUGJubgbbkUNaXcOYeQ&oe=679AA844&_nc_sid=10d13b" alt="hacktoberfest" />
            <p>Hacktoberfest of  Code4All was an online fest organized on 6th and 7th of the october 2024,
            participants came up together for Hacktoberfest 2024 with the Code4All Club to contribute, learn, and code from the comfort of home!</p>
            <p>Hacktoberfest consisted of live coding sessions, insightful workshops, and exclusive tips on navigating open-source contributions!</p>
        `
    }
    
};
