export interface Program {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  ageGroups: string;
  schedule: string;
  image?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  features: string[];
  image: string;
  sourceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training' | 'Nets' | 'Ground' | 'Coaching' | 'Squad';
  image: string;
  alt: string;
  caption: string;
  sourceNote: string;
  aspect: 'landscape' | 'portrait' | 'panorama';
}

export interface Coach {
  name: string;
  role: string;
  badge: string;
  contribution: string;
}

export interface WicketDetails {
  batsman: string;
  score: string;
  dismissal: string;
  impact: string;
}

export interface MatchPerformance {
  headline: string;
  match: string;
  tournament: string;
  opponent: string;
  player: {
    name: string;
    style: string;
  };
  figures: {
    overs: string;
    runs: string;
    wickets: string;
    economy: string;
  };
  wickets: WicketDetails[];
  story: string;
  quote: string;
}

export interface AcademyData {
  name: string;
  subtitle: string;
  alternateNames: string[];
  category: string;
  phone: string;
  rawPhone: string;
  whatsappMessage: string;
  rating: number;
  reviewCount: number;
  openHours: string;
  plusCode: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  mapsUrl: string;
  directionsUrl: string;
  coaches: Coach[];
  recentAchievement: MatchPerformance;
  programs: Program[];
  facilities: Facility[];
  gallery: GalleryItem[];
}

export const academy: AcademyData = {
  name: "PCA – Prafull Cricket Academy",
  subtitle: "Elite Cricket Coaching & Practice Facility",
  alternateNames: ["Prafull Cricket Academy", "Kamlesh Prafull Cricket Academy (KPCA)"],
  category: "Cricket Academy & Sports Club",
  phone: "087123 10862",
  rawPhone: "+918712310862",
  whatsappMessage: "Hi PCA Prafull Cricket Academy, I'm interested in cricket coaching. I'd like to know about trial sessions and training programs.",
  rating: 4.8,
  reviewCount: 83,
  openHours: "Open Daily • 6:00 AM – 11:00 PM (24 Hours access available upon request)",
  plusCode: "FFFF+J6, Secunderabad, Telangana",
  address: {
    line1: "186A, Plassy Lines",
    area: "Bowenpally",
    city: "Secunderabad, Hyderabad",
    state: "Telangana",
    pincode: "500011",
    full: "186A, Plassy Lines, Bowenpally, Secunderabad, Hyderabad, Telangana 500011"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=PCA+Prafull+Cricket+Academy+186A+Plassy+Lines+Bowenpally+Secunderabad",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=186A+Plassy+Lines+Bowenpally+Secunderabad+Telangana+500011",
  
  coaches: [
    {
      name: "Sudheer Sir",
      role: "Founder & Mentor",
      badge: "Founding Mentor",
      contribution: "Instilling timeless cricketing values, relentless perseverance, and mental character in every student."
    },
    {
      name: "Prafull",
      role: "Head Coach & Managing Director",
      badge: "Head Coach & MD",
      contribution: "Setting the high-performance bar, tactical clarity, and belief required to dominate state & league tournaments."
    },
    {
      name: "Manish Sir",
      role: "Fast Bowling Coach",
      badge: "Pace Specialist",
      contribution: "Fueling competitive edge, bowling biomechanics, speed generation, and high-intensity match execution."
    },
    {
      name: "Rahul Sir",
      role: "Senior Coach",
      badge: "Senior Technical Coach",
      contribution: "Relentless match-condition preparation, situational game sense, and technical batting/bowling refinement."
    },
    {
      name: "Vamshi Sir",
      role: "Fielding Specialist",
      badge: "Fielding & Fitness",
      contribution: "Elevating athletic standards, lightning reflex drills, agility conditioning, and on-field match toughness."
    },
    {
      name: "Vivek Sir & Nikhil Sir",
      role: "Grassroots Coaches",
      badge: "Grassroots Development",
      contribution: "Nurturing young beginners from their earliest years, building foundational technique, grit, and joy for the game."
    }
  ],

  recentAchievement: {
    headline: "Warrior Spirit at the Big Stage: Aryan Cheera Roars in the HCA League!",
    match: "PCA vs Kishore & Sons",
    tournament: "Official HCA League (Hyderabad Cricket Association)",
    opponent: "Kishore & Sons",
    player: {
      name: "Cheera Aryan",
      style: "Right-Arm Leg Spin (RALS)"
    },
    figures: {
      overs: "9 Overs",
      runs: "28 Runs",
      wickets: "4 Wickets",
      economy: "3.11 Econ"
    },
    wickets: [
      {
        batsman: "Armaan Yousuf (c)",
        score: "46",
        dismissal: "Bowled",
        impact: "Broke dangerous opening stand right when opposition looked set"
      },
      {
        batsman: "M A Shadab",
        score: "1",
        dismissal: "Caught behind edge",
        impact: "Clean tactical setup, induced false edge to strike immediately"
      },
      {
        batsman: "Mohd Shakeel Ahmed",
        score: "23",
        dismissal: "Bowled / Pressure",
        impact: "Applied dot-ball squeeze and dismantled settled batsman"
      },
      {
        batsman: "Anas Rahman",
        score: "13",
        dismissal: "Deception & Turned",
        impact: "Complete spin deception to claim his 4th top-order scalp"
      }
    ],
    story: "Waking up sick with high fever, severe nausea, and stomach pain, Aryan chose not to rest. Walking out onto the 22 yards with pure willpower, he bowled 9 grueling overs against a senior club lineup, breaking their top order and demonstrating what PCA warrior spirit truly means.",
    quote: "Talent can get you noticed, but sheer mental resilience is what keeps you standing when the world pushes against you. When you refuse to quit on your team and your craft, greatness reveals itself."
  },

  programs: [
    {
      id: "batting",
      name: "Batting Technique & Shot Execution",
      iconName: "Target",
      tagline: "Precision, Stance & Shot Selection",
      description: "Structured batting coaching emphasizing balanced stance, front and back-foot weight transfer, shot timing, and match situation confidence.",
      focusAreas: [
        "Batting Grip & Stance Balance",
        "Front-Foot & Back-Foot Drives",
        "Shot Selection & Timing Drills",
        "Facing Pace & Swing Bowling",
        "Spin Negotiation & Footwork"
      ],
      ageGroups: "Ages 6 to 19+ (Beginner to Advanced)",
      schedule: "Morning & Evening Batches"
    },
    {
      id: "bowling",
      name: "Bowling Mechanics & Biomechanics",
      iconName: "Zap",
      tagline: "Run-up Rhythm, High Arm & Seam Alignment",
      description: "Hands-on biomechanics coaching for pace and spin bowlers. Focus on arm extension, non-bowling arm pull, front-foot landing, and repeatable accuracy.",
      focusAreas: [
        "Run-Up Rhythm & Gathering Drills",
        "High-Arm Release & Biomechanics",
        "Wrist Position & Seam Presentation",
        "Line & Length Accuracy Grids",
        "Pace Variations & Swing Control"
      ],
      ageGroups: "Ages 7 to 19+ (Pace & Spin)",
      schedule: "Morning & Evening Batches",
      image: "/images/academy/pca-gmaps-04.jpg"
    },
    {
      id: "fielding",
      name: "Fielding, Catching & Reflexes",
      iconName: "Shield",
      tagline: "Agility, Safe Hands & Direct Hits",
      description: "Fielding drills focusing on ground fielding, reflex slip catching, boundary chase and slide, and accurate flat throwing to the stumps.",
      focusAreas: [
        "High & Slip Catching Drills",
        "Ground Fielding & Sliding Stops",
        "Underarm & Overarm Target Throws",
        "Reaction Ball & Reflex Training",
        "Wicket-Keeping Stance & Takes"
      ],
      ageGroups: "All Enrolled Academy Students",
      schedule: "Integrated Daily Sessions"
    },
    {
      id: "fitness",
      name: "Cricket-Specific Conditioning",
      iconName: "Flame",
      tagline: "Speed, Core Endurance & Athletic Discipline",
      description: "Physical conditioning designed for young athletes to build stamina, joint mobility, sprinting power, and core endurance.",
      focusAreas: [
        "Morning Squad Warm-Ups & Dynamic Mobility",
        "Sprint Acceleration & Shuttle Runs",
        "Core Stability & Rotational Power",
        "Injury Prevention & Cool-Down Protocols",
        "Hand-Eye Coordination Drills"
      ],
      ageGroups: "Tailored to Player Age Groups",
      schedule: "Pre-Session & Specialized Batches",
      image: "/images/academy/pca-gmaps-02.jpg"
    }
  ],

  facilities: [
    {
      id: "nets",
      name: "Dedicated Practice Nets & Turf Pitch",
      description: "Multiple netted lanes enabling focused batting and bowling practice sessions simultaneously with safety enclosures and turf wickets.",
      verified: true,
      features: [
        "Enclosed safety netting lanes",
        "Turf & matting practice pitches",
        "Natural open ground surroundings",
        "Floodlight pole infrastructure"
      ],
      image: "/images/academy/pca-gmaps-01.jpg",
      sourceNote: "Verified from PCA Google Maps listing photo"
    },
    {
      id: "ground",
      name: "Open Cricket Outfield & Training Ground",
      description: "Spacious natural grass outfield in Bowenpally for full-squad warm-up routines, boundary fielding, and match practice drills.",
      verified: true,
      features: [
        "Expansive natural grass training outfield",
        "Group fitness & squad warm-up area",
        "Target bowling & fielding markers",
        "Peaceful greenery setting"
      ],
      image: "/images/academy/pca-gmaps-02.jpg",
      sourceNote: "Verified from PCA Google Maps listing photo"
    },
    {
      id: "coaching-zone",
      name: "Dedicated Biomechanics Coaching Area",
      description: "Specialized training area equipped with agility hurdles, spring-loaded target stumps, and coach-led biomechanics correction stations.",
      verified: true,
      features: [
        "Agility hurdles for stride regulation",
        "Spring-loaded coaching target stumps",
        "One-on-one technical video & posture guidance",
        "Ground practice space"
      ],
      image: "/images/academy/pca-gmaps-04.jpg",
      sourceNote: "Verified from PCA Google Maps listing photo"
    }
  ],

  // Dynamically populated strictly with verified Google Maps photos
  gallery: [
    {
      id: "g1",
      title: "Practice Nets & Pitch Panorama",
      category: "Nets",
      image: "/images/academy/pca-gmaps-01.jpg",
      alt: "Panoramic view of PCA Bowenpally practice nets and cricket pitch",
      caption: "Panoramic view of enclosed nets, synthetic turf wicket, and training ground at Bowenpally.",
      sourceNote: "Google Maps Listing Verified Photo",
      aspect: "panorama"
    },
    {
      id: "g2",
      title: "Morning Squad Conditioning & Warm-ups",
      category: "Ground",
      image: "/images/academy/pca-gmaps-02.jpg",
      alt: "Academy students in whites doing morning warm-ups in a circle on the open grass outfield",
      caption: "Junior academy squad conducting structured morning warm-ups and dynamic stretches under open skies.",
      sourceNote: "Google Maps Listing Verified Photo",
      aspect: "landscape"
    },
    {
      id: "g3",
      title: "Junior Academy Students on Pitch",
      category: "Squad",
      image: "/images/academy/pca-gmaps-03.jpg",
      alt: "Young cricket academy students in white uniforms holding cricket bats on the ground",
      caption: "Aspiring young cricketers in their official white training kits with cricket bats at PCA ground.",
      sourceNote: "Google Maps Listing Verified Photo",
      aspect: "landscape"
    },
    {
      id: "g4",
      title: "Bowling Biomechanics Coaching Session",
      category: "Coaching",
      image: "/images/academy/pca-gmaps-04.jpg",
      alt: "Academy coach working with young bowler on high-arm extension using training hurdles",
      caption: "Coach providing hands-on instruction on bowling shoulder alignment, arm height, and release point.",
      sourceNote: "Google Maps Listing Verified Photo",
      aspect: "portrait"
    }
  ]
};
