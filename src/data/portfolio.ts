export const profile = {
  firstName: 'Soukaina',
  lastName: 'EL ABYAD',
  title: 'Junior AI & Data Engineer',
  status: 'Ouvert aux opportunités - Ingénieur IA & Data Junior',
  location: 'Maroc',
  bio: [
    "Junior en Intelligence Artificielle & Data, dotée d'un solide parcours académique en IA (Master) et en informatique. Passionnée par l'utilisation du machine learning et de l'ingénierie des données pour résoudre des défis du monde réel.",
    "Je suis motivée, curieuse et toujours prête à apprendre de nouvelles technologies au sein d'une équipe dynamique.",
  ],
  cvUrl: '/cv.pdf',
};

export const contacts = {
  email: 'soukainaelabayd@gmail.com',
  github: 'https://github.com/elabyadsoukaina',
  linkedin: 'https://www.linkedin.com/in/soukaina-elabyad',
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    name: 'Application de Recommandation de Livres par IA Générative — Pipeline RAG',
    description:
      "Une application web de recommandation de livres basée sur un système RAG couvrant plus de 5K ouvrages, avec nettoyage des données, découpage en chunks, vectorisation via all-mpnet-base-v2 et indexation dans ChromaDB. Intégration du LLM openai/gpt-oss-120b pour la génération de réponses et évaluation du système avec RAGAS, obtenant un score de 0,90 en faithfulness et de 0,68 en answer relevancy.",
    technologies: ['Python', 'Pandas', 'LangChain','Hugging face','ChromaDB','RAGAS','FastAPI','Streamlit'],
    repoUrl: 'https://github.com/elabyadsoukaina/book_Recommendation_Assistant.git',
  },
  
  {
    name: 'Text-to-SQL : Fine-tuning de Llama 3.2 3B avec QLoRA',
    description:
      "Fine-tuning de Llama 3.2 3B sur 9K exemples du dataset `b-mc2/sql-create-context` avec QLoRA et Unsloth pour la génération de requêtes SQL à partir de questions en langage naturel. Évaluation via `EXPLAIN` sur SQLite, atteignant 99,3 % de requêtes syntaxiquement valides contre 91,7 % pour le modèle de base, avec une accélération de 6× du temps d'inférence.",
    technologies: ['Python', 'PyTorch', 'Unsloth','Transformers','TRL','Datasets','Pandas','NumPy','SQLite'],
    repoUrl: 'https://github.com/elabyadsoukaina/Text-to-SQL-Fine-tuning-Llama-3.2-3B-with-QLoRA-.git',
  },
  {
    name: 'Segmentation Client à Grande Échelle',
    description:
      "Un projet de segmentation client à partir de plus de 500 000 transactions, avec PySpark pour le traitement des données, le calcul des indicateurs RFM et l’application de l’algorithme K-Means (Spark MLlib) afin de regrouper les clients selon leur comportement d’achat. Visualisation et analyse des segments obtenus avec Seaborn et Matplotlib.",
    technologies: ['Python', 'PySpark', 'Spark MLlib','Seaborn','Matplotlib'],
    repoUrl: 'https://github.com/elabyadsoukaina/customer-segmentation-pyspark.git',
  },

];

export type Experience = {
  period: string;
  location: string;
  role: string;
  company: string;
  missions: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    period: 'Avril - Septembre 2024 (6mois)',
    location: 'Rabat, Maroc',
    role: 'Stagiaire en Intelligence Artificielle',
    company: 'TICLab@UIR',
    missions: [
      "Parallélisé l’inférence d’un modèle CNN avec MPI (1 à 6 nœuds) : accélération jusqu’à ×4,2 sur ImageNet par rapport à la version séquentielle. et Efficacité 70 %.",
      "Implémenté la gestion des défaillances de nœuds avec ULFM et conteneurisé l’application avec Docker et Docker Compose pour simuler un cluster MPI multi-conteneurs.",
    ],
    tools: ['Python', 'MPI', 'ULFM', 'Docker'],

  },
   {
    period: 'Mai - Juillet 2022 (2mois)',
    location: 'BERRECHID, Maroc',
    role: 'Stagiaire en Développement Web',
    company: 'KAYNA Group',
    missions: [
      "Déploiement et configuration de l'outil de supervision réseau Zabbix, garantissant la surveillance des performances et de la disponibilité des équipements.",
      "Développement d'une application de gestion des incidents en PHP, HTML et CSS, permettant un suivi efficace des incidents déclenchés par Zabbix et leur affectation aux techniciens disponibles.",
    ],
    tools: ['Zabbix', 'PHP', 'Html', 'CSS'],
  },
];

export type Education = {
  degree: string;
  level: string;
  school: string;
  city: string;
};

export const educations: Education[] = [
  {
    degree: 'Master en Informatique et Intelligence Artificielle',
    level: 'Bac+5',
    school: 'Faculté des Sciences, Université Ibn Tofail',
    city: 'Kénitra',

  },
  {
    degree: 'Licence en Informatique',
    level: 'Bac+3',
    school: 'Faculté des Sciences et Techniques, Université Hassan I',
    city: 'Settat',
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Langages & Frameworks',
    skills: ['Python', 'SQL','Java','FastAPI'],
  },
  {
    category: 'Intelligence artificielle',
    skills: ['RAG', 'Embeddings', 'Vector stores (ChromaDB)', 'LangChain', 'Hugging Face', 'Fine-tuning'],
  },
  {
    category: 'Machine Learning & Data',
    skills: ['Scikit-learn', 'Pandas'],
  },
  {
    category: 'Big Data & Calcul distribué',
    skills: ['Spark MLlib', 'PySpark', 'ETL / ELT', 'MPI'],
  },
  {
    category: 'Bases de données',
    skills: ['Oracle', 'MySQL'],
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Linux'],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    name: 'AI Engineer for Developers Associate Certification',
    issuer: 'DataCamp',
    date: '2026',
    url: 'https://www.datacamp.com/certificate/AIEDA0015586822734',
  },
  {
    name: 'Certification Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    url: 'https://www.credly.com/badges/b927db51-d178-4b10-af29-06e75045c183/public_url',
  },
];
