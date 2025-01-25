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
            avatar: "https://drive.google.com/open?id=1EIwBf-IuHGCSApWandlUQ-U55cuQHWtK&usp=drive_copy",
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
};
