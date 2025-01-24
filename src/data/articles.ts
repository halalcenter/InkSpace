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
            role: "GDP HEAD"
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
    }
};