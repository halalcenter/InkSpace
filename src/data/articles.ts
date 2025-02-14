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
        title: "CSDS Syllabus",
        excerpt: "Notes and other resources for CSE-(DS) branch, SoIT",
        coverImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentImages: [],
        author: {
            name: "SoIT, RGPV",
            avatar: "https://upload.wikimedia.org/wikipedia/en/c/c4/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png",
            role: "Institute"
        },
        publishDate: "2024-11-30",
        isLatestNews: false,
        content: `
            <h1>1ST SEMESTER</h1>
            <h3>Intriductry Topics in Statistics, Probabilty and Calculas(CD-101)</h3>
            <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-I Introduction to Statistics(all units in one)</a></p>
            <p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-II Descriptive Statistics(all units in one)</a></p>
            <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-III Probability(all units in one)</a></p>
            <p> <a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-IV Probability distributions(all units in one)</a></p>
            <p><a href="https://drive.google.com/uc?export=download&id=133snpnbLpIlYJWEVJ30dGLORcsNx3BOb" download style="color: #a581bd;text-decoration: none; ">Unit-V Calculus(all units in one)</a></p>
            <h3>Basic Computer Engineering(CD-102)</h3>
            <p><a href="https://drive.google.com/file/d/12HRzPyVXflAsPFg3IAxtNjOZuI2Jdbus/view" download style="color: #a581bd;text-decoration: none; ">Unit-I Introduction to Computer</a></p>
            <p> <a href="https://drive.google.com/file/d/1VBgwXh3k9sHZ7mE0zKuxH4jQVsFiu196/view" download style="color: #a581bd;text-decoration: none; ">Unit-II Introduction to Algorithms</a></p>
            <p><a href="https://drive.google.com/file/d/1v2VhObKI7Z05TqDFpCr2GwKOCEqx_8Qn/view" download style="color: #a581bd;text-decoration: none; ">Unit-III Introduction to Data Structures</a></p>
            <p> <a href="https://drive.google.com/file/d/1ctDCrPJVCTxCLyeWnsATpbnq1nEHtX_2/view" download style="color: #a581bd;text-decoration: none; ">Unit-IV Computer Networking</a></p>
            <p><a href="https://drive.google.com/file/d/124qM_bfNM9OaDGOpd_A-bmhCrY1HsqKw/view" download style="color: #a581bd;text-decoration: none; ">Unit-V Data Base Management System</a></p>
            <h3>Principles of Electronics(CD-103)</h3>
            <p><a href="https://drive.google.com/file/d/1LdaTIAbaqeEY_chEXBhLEHI8mhi-v6_V/view" download style="color: #a581bd;text-decoration: none; ">Unit-I Semiconductors</a></p>
            <p> <a href="https://drive.google.com/file/d/1Lb7HZeVnC_yFmkzfNFhdVxP-mXN48JVj/view" download style="color: #a581bd;text-decoration: none; ">Unit-II Diodes and Diode Circuits</a></p>
            <p><a href="https://drive.google.com/file/d/1L4B6MaglIZif0OScgXD32ibLoR5aGaxz/view" download style="color: #a581bd;text-decoration: none; ">Unit-III Bipolar Junction Transistors(part 1)</a>
            <a href="https://drive.google.com/file/d/1L3I7Z7Mq4zB2GPwDiJkJzFTHN8jMLzNB/view" download style="color: #a581bd;text-decoration: none; ">   (part 2)</a></p>
            <p> <a href="https://drive.google.com/file/d/1LH-BlDbHGpV51Eaoozvj3poKbflUCXB0/view" download style="color: #a581bd;text-decoration: none; ">Unit-IV Feed Back Amplifier, Oscillators and Operational Amplifiers</a></p>
            <p><a href="https://drive.google.com/file/d/1LF15kmF7xGPFhYv7lmvwIfwLSTUAQspL/view" download style="color: #a581bd;text-decoration: none; ">Unit-V Digital Electronics</a></p>
            <h3>Fundamentals of Physics(CD-104)</h3>
            <p><a href="https://drive.google.com/file/d/1Pzwf0TIuCXzZM4nzpqLV64UEG4WuJT8A/view" download style="color: #a581bd;text-decoration: none; ">Unit-I Oscillation</a></p>
            <p> <a href="https://drive.google.com/file/d/1fnNGXQB0GeaWlukbWyqPPgHVZFyqPOQs/view" download style="color: #a581bd;text-decoration: none; ">Unit-II Interference-Principle of Superposition-Young’s experiment</a></p>
            <p><a href="https://drive.google.com/file/d/10PajwTQ24uZv_XOi-F-AQmXH1w5OHBli/view" download style="color: #a581bd;text-decoration: none; ">Unit-III Polarization of light</a></p>
            <p> <a href="https://drive.google.com/file/d/1ot9Cf-21qbt9dDN7mqsFEcEnYKzcoF6o/view" download style="color: #a581bd;text-decoration: none; ">Unit-IV Quantum Mechanics</a></p>
            <p><a href="https://drive.google.com/file/d/1-TeJdaMmPEfleazBWE6YeB1am4Dzh5Li/view" download style="color: #a581bd;text-decoration: none; ">Unit-V Laser and Fiberoptics</a></p>
            <h3>Communication Skills(CD-105)</h3>
            <p><a href="https://drive.google.com/file/d/1Uzb19x3VZ2BsMUrjIOoUBM-QhCoqvjuI/view" download style="color: #a581bd;text-decoration: none; ">Unit-I Overview of Leadership Oriented Learning (LOL)(all in units one)</a></p>
            <p><a href="https://drive.google.com/file/d/1Uzb19x3VZ2BsMUrjIOoUBM-QhCoqvjuI/view" download style="color: #a581bd;text-decoration: none; ">Unit-II Essential Grammar-I(all in units one)</a></p>
            <p><a href="https://drive.google.com/file/d/1Uzb19x3VZ2BsMUrjIOoUBM-QhCoqvjuI/view" download style="color: #a581bd;text-decoration: none; ">Unit-III Communication Skills(all in units one)</a></p>
            <p><a href="https://drive.google.com/file/d/1Uzb19x3VZ2BsMUrjIOoUBM-QhCoqvjuI/view" download style="color: #a581bd;text-decoration: none; ">Unit-IV Email Writing(all in units one)</a></p>
            <p><a href="https://drive.google.com/file/d/1Uzb19x3VZ2BsMUrjIOoUBM-QhCoqvjuI/view" download style="color: #a581bd;text-decoration: none; ">Unit-V Understanding Life Skills(all in units one)</a></p>


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
            role: "GDP Volunteer"
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
            <p>Fibonacci is a rapidly growing coding community dedicated to empower developers and encouraging a culture of continuous learning.
            Fibonacci aims to provide a comprehensive learning environment where members can enhance their coding skills, exchange knowledge, and solve complex algorithmic challenges.</p>
            
            <br><h2>GeeksforGeek</h2>
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

            <br><h2>How to Join?</h2>
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
            "https://lh3.google.com/u/2/d/1zc8knKtCDpCYPrnzrvSqaysmw5eD24Lz=w2000-h3276-iv1",
            "http://www.hackerrank.com/c4a05",
            "https://lh3.google.com/u/2/d/1nNtn-Xs5f1wN-f8I4kAVNQTeiQY_oJw0=w2000-h3276-iv1",
            "http://www.hackerrank.com/c4a05",
            "https://lh3.google.com/u/2/d/1aO3dRZ87Lxg-3QwvT9c0NkhfflPnpBi8=w2000-h3276-iv1",
            "https://lh3.google.com/u/2/d/1fdu_4pTDxyIQaXZ6RbhattvUr42-ps4T=w1440-h1440-iv1"
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
            <img src="https://lh3.google.com/u/2/d/1zc8knKtCDpCYPrnzrvSqaysmw5eD24Lz=w2000-h3276-iv1" alt="coding contest" />
            <p>Coding contests organized by the Code4All Club are typically designed to encourage programmers of all skill levels to test their skills,
            collaborate, and learn from each other. These contests often include a variety of challenges to suit diverse interests and expertise.
            Code4All club has organized a big number of 13 coding contest in the past on the hacker rank. </p>
            <a href="http://www.hackerrank.com/c4a05">1st coding contest organized by the club on HackerRank</a>
            <h3>She Codes.</h3>
            <img src="https://lh3.google.com/u/2/d/1nNtn-Xs5f1wN-f8I4kAVNQTeiQY_oJw0=w2000-h3276-iv1" alt="She codes" />
            <p>Code4All applauds the achievements of women who have ventured on their path of Competitive Programming.
            On the auspicious occasion of International Women’s Day for the honor of women who code Code4All brings
            SheCodes an exclusive coding contest for the girls. Code4All club has organized a total of two SheCodes in the past on the hacker rank.</p>
            <a href="http://www.hackerrank.com/c4a05">SheCodes on HackerRank</a>
            <h3>REACT DRIFT</h3>
            <img src="https://lh3.google.com/u/2/d/1aO3dRZ87Lxg-3QwvT9c0NkhfflPnpBi8=w2000-h3276-iv1" alt="react drift" />
            <p>This time Code4All came up with an exquisite development contest series to upskill the technical abilities of the students in the form of React Drift.</p>
            <p>1. React Drift was a front-end development contest using React.js, where all the participants were given online resources to learn React.js
            and a whatsapp group was created to clear the doubts of the participants, once the participant were comfortable with library, they’d to make a portfolio app and also host it on web</p>
            <p>2. React Drift was not just any development contest, it was full-fledged learning Bootcamp program, while the only pre-requisite for the event was learning attitude, “once you’re open to learning, the learning becomes very easy”.</p>
            <h3>HACKTOBERFEST</h3>
            <img src="https://lh3.google.com/u/2/d/1fdu_4pTDxyIQaXZ6RbhattvUr42-ps4T=w1440-h1440-iv1" alt="hacktoberfest" />
            <p>Hacktoberfest of  Code4All was an online fest organized on 6th and 7th of the october 2024,
            participants came up together for Hacktoberfest 2024 with the Code4All Club to contribute, learn, and code from the comfort of home!</p>
            <p>Hacktoberfest consisted of live coding sessions, insightful workshops, and exclusive tips on navigating open-source contributions!</p>
        `
    },
    "the-persona": {
        title: "The Persona",
        excerpt: "The Persona is a Personality Grooming Club - a unique space where you can cultivate your best self.",
        coverImage: "https://lh3.google.com/u/2/d/1XHy2sruiVrVOdeEHz9wtgtv3MtZWpLTt=w1867-h927-iv1",
        contentImage: [
            "https://lh3.google.com/u/2/d/1TM0bg7iA42jdyJ7dO81L845_6P66MHhV=w1867-h927-iv2",
            "https://lh3.google.com/u/2/d/1NrZLt063l5WGMZB4vNjH6AN0hPX5Z9ua=w1173-h907-iv1",
            "https://lh3.google.com/u/2/d/15OKwz0J-puOP0_B6zX88VddbZTFkKTg0=w1867-h927-iv2"
            ],
        author: {
            name: "The Persona",
            avatar: "https://lh3.google.com/u/2/d/1XHy2sruiVrVOdeEHz9wtgtv3MtZWpLTt=w1867-h927-iv1",
            role: "Club"
        },
        publishDate: "2025-01-07",
        isLatestNews: false,
        content: `
            <p>The Persona is a Personality Grooming Club - a unique space where you can cultivate your best self.
            This club is dedicated to fostering self improvement and professional development in a supportive and respectful environment.</p>
            <img src="https://lh3.google.com/u/2/d/1TM0bg7iA42jdyJ7dO81L845_6P66MHhV=w1867-h927-iv2" alt="team" />
            <h3>The Persona functions on the 2 basic categories of activities</h3>
            <h2>REGULAR ACTIVITIES</h2>
            <p>These are the activities performed on daily or weekly basis
            Group discussions, Debates, Workshops, Presentation of trending topics.</p><br>
            <h2>EVENTS</h2>
            <p>These are the activities organized occasionally
            Debates competitions, Mock interviews, Public
            speeches competition, Seminars, Quiz competitions.</p>
            <h3>The Persona has successfully organized one Workshop and two Events.
            Below are the details of each, outlined one by one:</h3><br>
            <h2>WORKSHOP 1-Built Your Digital Legacy: LinkedIn Workshop</h2>
            <p>The Persona organized an online session titled *"Build Your Digital Legacy"* on 20th October 2024 . The session aimed to help students build a professional LinkedIn profile and enhance their networking skills.
            The mentor for the session was *Mr. Prakul Mishra*, Head Coordinator at Training and Placement Cell (TnP), who provided valuable insights on creating impactful LinkedIn profiles.
            He covered topics such as optimizing headlines and summaries, showcasing skills, and using LinkedIn effectively for career opportunities.
            Students actively participated, asking questions and receiving personalized feedback. The session was highly appreciated for its practical approach and relevance to career development.
            The Persona thanks Mr. Prakul Mishra for his guidance and all participants for making the event successful.</p><br>
            <h3>EVENT 1-</h3>
            <h2>Vichaar Sangam Report: Group Discussion Competition</h2>
            <img src="https://lh3.google.com/u/2/d/15OKwz0J-puOP0_B6zX88VddbZTFkKTg0=w1867-h927-iv2" alt="Vichaar Sangam" />
            <p>In the spirit of intellectual engagement and personal development, The Persona Club organized an exceptional event, Vichaar Sangam – Confluence of Thoughts, on 22nd November 2024. 
            This group discussion competition aimed to provide a dynamic platform for students to enhance their communication, critical thinking, and teamwork skills.
            The event brought together participants, judges, and esteemed guests to foster a culture of thoughtful dialogue and collaborative learning, aligning with the club's mission to nurture well-rounded individuals.</p>
            <br><h3>Event Overview</h3>
            <p>- Name: Vichaar Sangam – Confluence of Thoughts<br>
            - Date: 22nd November 2024<br>
            - Venue: Old Mechanical Building, RGPV<br>
            - Organizer : The Persona Club<br>
            - Objective: To enhance students' communication, critical thinking, and teamwork skills through engaging group discussions.</p><br>
            <h3>Winners of the Competition</h3>
            <p>- Title Winner: Dhruv Tiwari<br>
            - 1st Runner-up: Shubhangi Tiwari<br>
            - 2nd Runner-up: Rajat Verma<br>
            - 3rd Runner-up: Ujjawal Tiwari<br>
            - 4th Runner-up: Hardik Manthankar</p>
            <br><h3>Judgment Criteria</h3>
            <p>- Content knowledge<br>
            - Communication skills<br>
            - Team dynamics<br>
            - Decision-making<br>
            - General knowledge</p>
            <br><h3>Closing Ceremony</h3>
            <p>- Results Announcement: 3:51 PM.<br>
            - Prizes: Certificates, trophies, mugs, medals, and stickers.<br>
            - Thank You Speeches: Delivered by club lead Ansh Kumar and mentors.<br>
            - Feedback: Provided by chief guests, judges and participants.</p>
            <br><h3>Captured Moments from the Session</h3>
            <p>The event captured memorable moments of intellectual engagement and teamwork, showcasing the efforts and skills of all participants.</p>
            <br><h3>Acknowledgment</h3>
            <p>"Vichaar Sangam" successfully fostered intellectual engagement and skill-building among participants.
            The Persona Club extends heartfelt gratitude to the assessors, judges, chief guests, and participants for their contributions to the event’s
            success. Such initiatives inspire continuous growth in students' personal and professional development.</p><br>
            <h3>EVENT 2-</h3>
            <h2>Alumni Interaction</h2>
            <h3>Unlocking Potential: Bridging the Gap Between Alumni and Students</h3>
            <p>On 26th December 2024, The Persona Club, in collaboration with TNP-RGPV, hosted an inspiring Alumni Interaction Session aimed at
            connecting current students with accomplished alumni from the 2005 batch. The event provided a unique platform for students to 
            learn directly from professionals who once walked the same halls, now excelling in their respective fields.
            This session focused on fostering meaningful dialogue between students and alumni, addressing the evolving challenges of the tech industry,
            career development strategies, and personal growth. By sharing their experiences and expertise,
            the alumni offered valuable guidance to help students navigate academic and professional journeys effectively.</p><br>
            <h3>Event Overview</h3>
            <p><strong>- Event Name: Unlocking Your Potential: Alumni Interaction Session</strong>
            - Date: 26th December 2024<br>
            - Venue: Conference Hall<br>
            - Time: 3:00 PM - 5:00 PM</p>
            <img src="https://lh3.google.com/u/2/d/1NrZLt063l5WGMZB4vNjH6AN0hPX5Z9ua=w1173-h907-iv1" alt="alumni meet" />
            <h3>Speakers</h3>
            <h4>1. Asad Khan</h4>
            <p>- Batch: EC 2005<br>
            - Current Position: Systems Solution Architect, Ericsson (India)<br>
            - Expertise: Systems Architecture and Telecommunications</p>
            <h4>2. Ankit Upadhyay</h4>
            <p>- Batch: CS 2005<br>
            - Current Position: Data Engineer, Google (USA)<br>
            - Expertise: Data Engineering and Cloud Technologies</p>
            <h4>3. Amit Sharma</h4>
            <p>- Batch: IT 2005<br>
            - Current Position: Product Lead, Meta (USA)<br>
            - Expertise: Product Management and Technology Leadership</p><br>
            <h3>Purpose and Objectives</h3>
            <h4>The primary goal of the event was to:</h4>
            <p>- Provide students with real-world insights into industry trends and expectations.<br>
            - Help bridge the gap between academic learning and professional realities.<br>
            - Inspire students to pursue excellence through the shared experiences of alumni.<br>
            - Strengthen the bond between alumni and their alma mater.</p>
            <br><p>By engaging in open discussions, Q&A sessions, and networking opportunities, students gained practical knowledge and actionable adviceto prepare for their future endeavors.</p>
            <br><h3>Pre-Event Work</h3>
            <p>- Event promotion through posters and graphics.<br>
            - Social media campaigns on Instagram and WhatsApp.</p>
            <br><h3>Session Breakdown</h3><br>
            <h4>1. Opening Session:</h4>
            <p>- Welcome address by Training and Placement Officer, Dr. Shikha Agrawal.<br>
            - Alumni introductions and an overview of their achievements.<br>
            - Presentation of bouquets to the guests by Dr. Shikha Agrawal.</p><br>
            <h4>2. Alumni Insights and Key Topics:</h4>
            <p>- Professional Journeys: Alumni shared experiences, challenges, and key learnings from their respective fields.<br>
            <strong>- Navigating University Life:</strong><br>
            - Balancing academics and extracurriculars.<br>
            - Building strong foundations for future careers.<br>
            <strong>- Modern Challenges in the Tech Industry:</strong><br>
            - AI's transformative impact on industries.<br>
            - Adapting to rapid technological advancements.<br>
            <strong>- Career Development:</strong><br>
            - Importance of continuous learning and emerging trends.<br>
            - Exploring international opportunities and industry transitions.<br>
            - Focus on deep study, logical thinking, and avoiding reliance on question banks.</p><br>
            <h4>Q&A Session:</h4>
            <p><strong>- Interactive discussion covering:</strong><br>
            - Career strategies, industry-specific insights, and workplace challenges.<br>
            - International work experiences and emerging roles (e.g., DevOps, Cloud Engineers).<br>
            - Changes in RGPV over the past 20 years.</p>
            <h4>Networking Session:</h4>
            <p>- One-on-one interactions and small group discussions with alumni.<br>
            - Exchange of professional contacts and mentorship opportunities</p><br>
            <h3>Event Impact</h3>
            <p>The collaboration with TNP-RGPV enriched the event, creating opportunities for networking, mentorship, and real-world insights. 
            The guidance from alumni helped students gain clarity on career paths and industry expectations, bridging the gap between academic learning and professional realities.</p>
            <br><h4>Acknowledgments</h4>
            <p>Gratitude was extended to the distinguished alumni’s, Dr. Shikha Agrawal Ma’am, faculty coordinators, the organizing committee,
            technical team, and all attendees for making this event a success.</p><br>
            <h3>Future Initiatives</h3>
            <p><strong>Building on this success, The Persona plans to:</strong><br>
            - Host regular alumni interaction sessions.<br>
            - Develop mentorship programs and networking platforms.</p>
            <p>The session concluded with renewed inspiration among students, reflecting the enduring bond between alumni and their alma mater. 
            The Persona Club expresses heartfelt thanks to the alumni for their invaluable time and guidance.</p>
            `
    },
    "nexura": {
        title: "NEXURA",
        excerpt: "Nexura aims to create a hub for aspiring developers and creatives where they can harness their technical, artistic, and interpersonal skills for professional and personal development",
        coverImage: "https://lh3.google.com/u/2/d/1Y4VLoMul7OzXWSxABXI9pWObEJOfRpFt=w2000-h3276-iv1",
        contentImage: [
            "https://www.instagram.com/reel/DBTX2kMy833"
            ],
        author: {
            name: "Nexura",
            avatar: "https://lh3.google.com/u/2/d/1Y4VLoMul7OzXWSxABXI9pWObEJOfRpFt=w2000-h3276-iv1",
            role: "Club"
        },
        publishDate: "2025-01-15",
        isLatestNews: false,
        content: `
            <p>“अग्रेसृजनं, वि जयः पथः " or "Creation leads, the victory follows” is the club's tagline. Nexura aims to create a hub for aspiring developers
            and creatives where they can harness their technical, artistic, and interpersonal skills for professional and personal development.
            The club aims to develop skills related to web development, 3D animation, software like ANSYS, and personality development.</p>
            <h2>Objectives of the club:</h2>
            <h3>Technical Expertise:</h3> <p>To provide resources and opportunities for learning and practicing web development and 3D animation.</p>
            <h3>Skill Development:</h3> <p>To enhance member’s technical, creative, and personal skills through structured workshops, peer learning, and real-world projects.</p>
            <h3>Personality Growth:</h3> <p>To promote personal and professional growth by focusing on communication, leadership, and presentation skills.</p>
            <h3>Collaboration and Networking:</h3> <p>To facilitate cooperation between members and build connections with industry professionals.</p>
            <h3>Project Implementation:</h3> <p>To foster a culture of practical implementation by encouraging members to work on real-world projects.</p>
            <h2>Nexura’s vision:</h2>
            <p>To instill key values of diligence, self-discipline, sincerity, dedication, and determination in students through comprehensive training in the relevant fields, while strictly adhering to the institute's rules and regulations. To establish a reputation as the foundation that empowers students to
            explore, enhance, and fully embrace their potential. To ensure alignment of the society's goals with those of the University Institute of Technology, Rajiv Gandhi Technical University, Bhopal [M.P.],
            fostering a shared vision of academic and personal excellence.</p>
            <h3>Nexura’s Impressive work:-</h3>
            <p><a href="https://www.instagram.com/reel/DExLNYdyQGn/?igsh=MTgzYWVuN29lOW1ydg==">INSTAGRAM POST 1</a><br>
            <a href="https://www.instagram.com/reel/DEQOqJctJUl/?igsh=ZG1pZm5vdmZ1MmJ2">INSTAGRAM POST 2</a><br>
            <a href="https://www.instagram.com/reel/DDpUXWTt1C1/?igsh=MWRxcmkyZTFiZXB2dg==">INSTAGRAM POST 3</a><br>
            <a href="https://www.instagram.com/reel/DCeyHp8NLqq/?igsh=MXU2MHQ4aGZ2dDh1ZQ==">INSTAGRAM POST 4</a><br>
            <a href="https://www.instagram.com/reel/DCMhyi_ynrm/?igsh=YXdxZzlqZ2M0NDg1">INSTAGRAM POST 5</a></p>
            `
    },
    "creativity-in-social-media": {
        title: "Creativity in Social Media",
        excerpt: "This blog examines how creativity, social media, and video editing come together to produce content that counts.",
        coverImage: "https://lh3.google.com/u/2/d/1RmEQUCLKAlb4MlJF5ukoi6Rfri3fREJs=w1867-h927-iv1",
        contentImage: [
            "https://lh3.google.com/u/2/d/1Gm75jSaAW8swmQu6vr1WtT3f-SaAwfE_=w1920-h868-iv1",
            "https://lh3.google.com/u/2/d/1BY-OQu09FGLhS64pPQEyUkuova-flhlr=w1867-h927-iv1",
            "https://lh3.google.com/u/2/d/1mHSoSyfBHvAXP7jgLQmjjH3TBt-LWJPf=w1920-h868-iv1"
            ],
        author: {
            name: "Rajveer Bairagi",
            avatar: "https://lh3.google.com/u/2/d/1e2CiE07DUqM0yENrfGs8zLD3Q2qOL_Qc=w1920-h868-iv1",
            role: "GDP Volunteer"
        },
        publishDate: "2025-01-25",
        isLatestNews: true,
        content: `
        <p>Creativity is the name of the game in today's fast-paced digital age. Social media has emerged as a mighty tool for people connection, idea sharing,
        and business promotion. For video editors and social media marketers, the task is developing content that gets noticed and makes a lasting impression.
        This blog examines how creativity, social media, and video editing come together to produce content that counts.</p>
        <img src="https://lh3.google.com/u/2/d/1Gm75jSaAW8swmQu6vr1WtT3f-SaAwfE_=w1920-h868-iv1" alt="social media" />
        <p>Social media has transformed how companies communicate with their publics. Social media platforms such as Instagram, YouTube, and LinkedIn provide 
        new avenues for communication. To thrive, it's crucial to know how each platform operates. For instance, Instagram's algorithm supports reels that 
        have high engagement, while LinkedIn prefers posts that initiate conversations. Each post you make must have a definite objective, be it generating 
        traffic on your website, boosting sales, or expanding brand awareness. Consistency is also crucial. Regular posting establishes trust and maintains 
        a connection with your public. Tools such as Buffer or Hootsuite can assist in planning and scheduling posts with ease.<br><br>
        Video is among the greatest tools for communicating a message. Research indicates individuals recall more from watching videos than reading. 
        Yet, what makes a video stand out? It begins with a story. If you're creating a quick Instagram Reel or a long YouTube tutorial, consider the 
        message you need to convey, the feelings you want to evoke, and who your audience is. Having the right equipment is also key. Programs such as 
        Adobe Premiere Pro and Final Cut Pro provide Advanced features, while apps such as CapCut and InShot are perfect for rapid editing. 
        Don't forget to use the platform—Instagram prefers vertical videos, YouTube prefers horizontal ones, and YouTube Sorts eats up short, fast clips.<br><br>
        While technical proficiency is handy, it's creativity that distinguishes your content. Ideas may strike anywhere—movies, artwork, or fellow creators. 
        Sites like Pinterest and Behance are ideal to look for ideas. Feel free to experiment with new forms or styles. Numerous viral crazes began in test mode. 
        To make your content stand out, presenting your message in innovative formats, such as humor, animation, or interactive content, works.</p>
        <img src="https://lh3.google.com/u/2/d/1BY-OQu09FGLhS64pPQEyUkuova-flhlr=w1867-h927-iv1" alt="growth on social media" />
        <p>Here's an example of how creativity, social media, and video editing collaborated for a successful campaign. A neighborhood coffee shop needed 
        to promote a new seasonal drink. They released teasers on social media prior to launch and collaborated with local influencers to increase reach. 
        They also created short videos for Instagram and YouTube explaining how the drink was prepared, with slow-motion shots of coffee being poured, 
        cool background music, and text featuring the special ingredients. To engage the audience, they organized a naming contest for the drink. 
        The campaign was extremely successful, driving customer visits up by 40% and their social media followers by 25% in just one month.
        <br><br>There are numerous tools that can assist in making your content even more better. For managing social media, use Buffer or Hootsuite 
        to schedule your posts. For video editing, Adobe Premiere Pro and Final Cut Pro are perfect for professional editing, while Canva and CapCut 
        are perfect for quick edits. For ideas, Pinterest is a good starting point, Canva assists in simple designs, and tools such as ChatGPT can assist 
        in brainstorming captions or ideas for content.</p>
        <img src="https://lh3.google.com/u/2/d/1mHSoSyfBHvAXP7jgLQmjjH3TBt-LWJPf=w1920-h868-iv1" alt="video editing" />
        <p>Video editing and social media marketing have many ways of generating excellent content. With a blend of creativity, technical ability, 
        and planning, you can develop content that people love and deliver results. Be loyal to your form, continue experimenting, and never forget 
        what the audience needs. The online environment constantly evolves, but with imagination, you will manage to be at the top.</p>
        `
    },
    "my-first-http-server": {
        title: "My First HTTP server",
        excerpt: "Why and How I Built My First HTTP Server in Python and Why You Probably Should Too.",
        coverImage: "https://i0.wp.com/tolustar.com/wp-content/uploads/2021/03/http.jpeg?fit=900%2C600&ssl=1",
        contentImages: [
            "https://img.notionusercontent.com/s3/prod-files-secure%2Ffd82d1e2-62ed-4f35-92ef-b9e36234c406%2F0bd42983-3feb-495d-b602-5531f3e2a64e%2Fimage.png/size/w=2000?exp=1739646997&sig=ArORL0bxcU8co9wMMPpV8Hv2nBxF774qD_Q56jI2IdY"
        ],
        author: {
            name: "Aditya Upadhyay",
            avatar: "https://lh3.google.com/u/2/d/1GezmqimDTRhdBGFNY5v-Fj4_3Oa-xOLj=w1867-h927-iv1",
            role: "GDP Volunteer"
        },
        publishDate: "2025-02-15",
        isLatestNews: true,
        content: `
       <p>Like most developers, I started web development using high-level frameworks—Flask, Express, and Next.js. These tools are amazing, but they also hide the raw mechanics of how the web actually works.</p>

<p>Everything changed when I picked up a book on TCP/IP. Suddenly, I wasn’t just building APIs—I was seeing the web at its core: packets, connections, request headers, response codes. That’s when I had a realization:<br>
I had built so many web apps, but I had never actually built the web.</p>

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffd82d1e2-62ed-4f35-92ef-b9e36234c406%2F0bd42983-3feb-495d-b602-5531f3e2a64e%2Fimage.png/size/w=2000?exp=1739646997&sig=ArORL0bxcU8co9wMMPpV8Hv2nBxF774qD_Q56jI2IdY" alt="TCP/IP" />

<p>So, I decided to create an HTTP server from scratch in Python. No frameworks. Just the standard library and a lot of curiosity.</p>

<h2>Why You Should Build One Too</h2>
<p><strong>1. Understand the Web’s Core</strong> – Ever wondered what actually happens when you visit a website? Writing your own server answers that.<br>
<strong>Get Hands-On with HTTP</strong> – Learn how requests are received, parsed, and responded to—all without a framework holding your hand.<br>
<strong>Master Networking Basics</strong> – If you've worked with APIs or web apps, this will *dramatically* improve your debugging and backend skills.<br>
<strong>Appreciate the Magic of Frameworks</strong> – After writing your own server, you’ll love Flask and Express even more.</p>

<h2>How I Built My First Python HTTP Server</h2>
<p><strong>Surprisingly, Python makes it super easy to spin up a basic HTTP server:</strong></p>

<pre><code>
from http.server import SimpleHTTPRequestHandler, HTTPServer

host = "localhost"
port = 8080

server = HTTPServer((host, port), SimpleHTTPRequestHandler)
print(f"Server running on http://{host}:{port}")
server.serve_forever()
</code></pre>

<p>Run this script, open your browser, and visit <a href="http://localhost:8080">http://localhost:8080</a>. Your Python server is now serving files from your current directory!</p>

<h2>Serving an HTML Page</h2>
<p>A simple server is nice, but what if we want to serve actual <strong>HTML</strong> instead of just directory files? Here’s how I did it:</p>

<pre><code>
from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"""
                <html>
                <head><title>My First Python Server</title></head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>Welcome to my custom Python HTTP server.</p>
                </body>
                </html>
            """)
        else:
            super().do_GET()

host = "localhost"
port = 8080
server = HTTPServer((host, port), CustomHandler)
print(f"Server running on http://{host}:{port}")
server.serve_forever()
</code></pre>

<h2>The Moment of Truth</h2>
<p>Run the script and visit <strong><a href="http://localhost:8080">http://localhost:8080</a></strong>—you’ll see a beautifully simple HTML page served directly from your Python server.</p>

<h2>Final Thoughts</h2>
<p>This small project gave me <strong>a deep appreciation for networking, HTTP, and how the web actually works</strong>. If you’ve always relied on frameworks, I challenge you to take a step back and build a server from scratch.<br>
Because sometimes, the best way to move forward is to go back to the basics. 🚀</p>


    }
};
