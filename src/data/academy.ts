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
  type?: 'image' | 'video';
  title: string;
  category: 'Squad' | 'Trophies' | 'Coaching' | 'Ground' | 'Celebration';
  image: string;
  videoSrc?: string;
  alt: string;
  caption: string;
  sourceNote: string;
  aspect: 'landscape' | 'portrait' | 'panorama';
  duration?: string;
  badge?: string;
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

export interface MethodologyPillar {
  id: string;
  pillarNumber: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  quote: string;
  coach: string;
  keyPractices: string[];
  drills: string[];
}

export interface PlayerPathwayStage {
  id: string;
  stageName: string;
  ageBracket: string;
  levelBadge: string;
  summary: string;
  curriculum: string[];
  matchExposure: string;
  trainingFrequency: string;
  coachRatio: string;
  outcomes: string[];
}

export interface SpecializedClinic {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  targetGroup: string;
  format: string;
  focusDrills: string[];
  equipmentUsed: string[];
  benefit: string;
}

export interface BatchSchedule {
  id: string;
  name: string;
  days: string;
  timings: string;
  category: string;
  capacity: string;
  badge: string;
  idealFor: string;
}

export interface DailySessionPhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  iconName: string;
  activities: string[];
}

export interface TrialStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Trial & Enrollment' | 'Training & Batches' | 'Equipment & Safety' | 'Match Exposure';
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
  methodology: MethodologyPillar[];
  playerPathways: PlayerPathwayStage[];
  specializedClinics: SpecializedClinic[];
  batchSchedules: BatchSchedule[];
  dailySessionRoutine: DailySessionPhase[];
  trialSteps: TrialStep[];
  faqs: FAQItem[];
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
      image: "/gallery/pca-trophy-presentation-lineup.jpg"
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
      image: "/gallery/pca-full-squad-ground-lineup.jpg"
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
      image: "/gallery/pca-champions-daylight-ground.jpg",
      sourceNote: "Official PCA Academy practice grounds & nets"
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
      image: "/gallery/pca-full-squad-ground-lineup.jpg",
      sourceNote: "Official PCA Academy open grass training outfield"
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
      image: "/gallery/pca-coach-prafull-award-handshake.jpg",
      sourceNote: "Head Coach Prafull & technical mentorship session"
    }
  ],

  // Modern authentic high-resolution photos and videos directly from PCA grounds & tournaments
  gallery: [
    {
      id: "g-vid-1",
      type: "video",
      title: "Dussehra Cup Platinum Champions & Trophies",
      category: "Celebration",
      image: "/gallery/pca-team-dussehra-winners.jpg",
      videoSrc: "/gallery/pca-dussehra-cup-platinum-celebration.mp4",
      alt: "PCA cricket academy celebration video with Dussehra Cup Platinum trophies",
      caption: "Championship showcase video displaying the grand Dussehra Cup Platinum trophy, Best Batsman, Best Bowler cups, and full team cheer.",
      sourceNote: "Authentic Academy Match Video",
      aspect: "landscape",
      duration: "1:15",
      badge: "Platinum Champions"
    },
    {
      id: "g-pic-1",
      type: "image",
      title: "PCA Academy Squad & Coaches Championship Glory",
      category: "Trophies",
      image: "/gallery/pca-champions-team-trophies-wide.jpg",
      alt: "Full PCA academy squad and coaching staff seated with Dussehra Cup trophies",
      caption: "Head Coach Prafull, senior trainers, and academy players proudly displaying tournament silverware in their official navy & gold uniforms.",
      sourceNote: "Official PCA Academy Grounds",
      aspect: "landscape",
      badge: "Championship Squad"
    },
    {
      id: "g-pic-2",
      type: "image",
      title: "Coach Prafull Congratulating Junior Medal Winner",
      category: "Coaching",
      image: "/gallery/pca-coach-prafull-award-handshake.jpg",
      alt: "Coach Prafull shaking hands with junior cricket player wearing gold medal and PCA jersey",
      caption: "Coach Prafull personally congratulating an academy star following a triumphant tournament campaign.",
      sourceNote: "Official PCA Academy Presentation",
      aspect: "portrait",
      badge: "Head Coach Mentorship"
    },
    {
      id: "g-vid-2",
      type: "video",
      title: "Aryan Awarded Best Bowler of Tournament",
      category: "Trophies",
      image: "/gallery/pca-award-stage-sideview.jpg",
      videoSrc: "/gallery/pca-best-bowler-award-aryan.mp4",
      alt: "Aryan Cheera receiving Best Bowler trophy from academy coach",
      caption: "Live video of Aryan being announced as the Best Bowler of the tournament with thunderous applause from teammates.",
      sourceNote: "Tournament Presentation Video",
      aspect: "landscape",
      duration: "0:21",
      badge: "Best Bowler Trophy"
    },
    {
      id: "g-pic-3",
      type: "image",
      title: "Grand Academy Panorama - Trophies & Champions",
      category: "Trophies",
      image: "/gallery/pca-squad-panorama-trophy-display.jpg",
      alt: "Panoramic view of the entire PCA squad with trophy display table",
      caption: "Full panoramic portrait capturing all enrolled junior and senior batch players with their mentor coaches and trophies.",
      sourceNote: "Bowenpally Facility Grounds",
      aspect: "panorama",
      badge: "Full Academy Roster"
    },
    {
      id: "g-pic-4",
      type: "image",
      title: "PCA Squad Open Outfield Lineup",
      category: "Ground",
      image: "/gallery/pca-full-squad-ground-lineup.jpg",
      alt: "Academy students in blue uniform standing on the outfield with floodlight towers",
      caption: "PCA players and coaches on the expansive natural turf outfield under daylight, backed by safety netting and lighting towers.",
      sourceNote: "Bowenpally Outfield & Nets",
      aspect: "landscape",
      badge: "Turf Outfield"
    },
    {
      id: "g-vid-3",
      type: "video",
      title: "3-2-1 Level Up! PCA Team Rally Chant",
      category: "Celebration",
      image: "/gallery/pca-squad-cheering-medals.jpg",
      videoSrc: "/gallery/pca-team-chant-321.mp4",
      alt: "PCA academy team shouting team cheer together",
      caption: "Rousing team unity chant '3, 2, 1, Level Up!' as players celebrate their collective season progress.",
      sourceNote: "Academy Squad Rally Video",
      aspect: "landscape",
      duration: "0:02",
      badge: "Team Spirit"
    },
    {
      id: "g-pic-5",
      type: "image",
      title: "Dussehra Cup Best Batsman & Bowler Trophies",
      category: "Coaching",
      image: "/gallery/pca-trophy-presentation-lineup.jpg",
      alt: "Coach presenting trophy to young batsman with squad lined up",
      caption: "Coaches presenting individual tournament trophies to rising stars who excelled during crunch game moments.",
      sourceNote: "Match Ceremony",
      aspect: "landscape",
      badge: "Individual Awards"
    },
    {
      id: "g-pic-6",
      type: "image",
      title: "Guard of Honor & Teammate Applause",
      category: "Celebration",
      image: "/gallery/pca-squad-celebration-clapping.jpg",
      alt: "Young cricketers applauding teammate who won medal",
      caption: "Students cheering each other in an inspiring display of sportsmanship and mutual encouragement.",
      sourceNote: "Student Camaraderie",
      aspect: "landscape",
      badge: "Sportsmanship"
    },
    {
      id: "g-vid-4",
      type: "video",
      title: "Junior Star Award Ceremony",
      category: "Coaching",
      image: "/gallery/pca-trophy-handover-stage.jpg",
      videoSrc: "/gallery/pca-junior-star-award-trophy.mp4",
      alt: "Junior academy cricketer stepping up for award",
      caption: "Young prodigy stepping up to the presentation podium to receive their milestone performance trophy.",
      sourceNote: "Tournament Video Highlight",
      aspect: "landscape",
      duration: "0:03",
      badge: "Rising Talent"
    },
    {
      id: "g-pic-7",
      type: "image",
      title: "Match Day Academy Lineup",
      category: "Ground",
      image: "/gallery/pca-ground-squad-lineup-wide.jpg",
      alt: "Academy squad seated and standing on open ground",
      caption: "The complete PCA coaching and player lineup ready for match day action at the Bowenpally facility.",
      sourceNote: "Official Team Formation",
      aspect: "landscape",
      badge: "Squad Formation"
    },
    {
      id: "g-pic-8",
      type: "image",
      title: "Championship Banner Panorama",
      category: "Squad",
      image: "/gallery/pca-champions-panoramic-view.jpg",
      alt: "Wide panoramic photo of the academy squad",
      caption: "Panoramic perspective of the academy cohort in front of the training complex and net facilities.",
      sourceNote: "Facility Panorama",
      aspect: "panorama",
      badge: "Official Panorama"
    },
    {
      id: "g-vid-5",
      type: "video",
      title: "Parent & Family Trophy Handover",
      category: "Coaching",
      image: "/gallery/pca-trophy-handover-stage.jpg",
      videoSrc: "/gallery/pca-parent-award-presentation.mp4",
      alt: "Parent presenting trophy to junior player",
      caption: "Community celebration with parents and mentors presenting honors to junior cricket trainees.",
      sourceNote: "Family & Community Video",
      aspect: "landscape",
      duration: "0:03",
      badge: "Community"
    },
    {
      id: "g-pic-9",
      type: "image",
      title: "Dussehra Cup Platinum Winners Squad",
      category: "Trophies",
      image: "/gallery/pca-team-dussehra-winners.jpg",
      alt: "PCA team with Dussehra cup trophies",
      caption: "Victory photograph commemorating the academy's Dussehra Cup Platinum championship triumph.",
      sourceNote: "Dussehra Cup Championship",
      aspect: "landscape",
      badge: "Trophy Ceremony"
    },
    {
      id: "g-pic-10",
      type: "image",
      title: "Gold Medal Pride",
      category: "Celebration",
      image: "/gallery/pca-squad-cheering-medals.jpg",
      alt: "Squad members cheering with medals",
      caption: "Junior squad members proudly showing off their hard-earned championship medals.",
      sourceNote: "Medal Winners",
      aspect: "landscape",
      badge: "Medal Honors"
    },
    {
      id: "g-vid-6",
      type: "video",
      title: "Walk of Honor & Team Applause",
      category: "Celebration",
      image: "/gallery/pca-squad-applause-moment.jpg",
      videoSrc: "/gallery/pca-player-run-up-applause.mp4",
      alt: "Player walking past cheering teammates",
      caption: "Player walk of honor through cheering teammates and coaching staff.",
      sourceNote: "Award Moment Video",
      aspect: "landscape",
      duration: "0:02",
      badge: "Walk of Honor"
    },
    {
      id: "g-pic-11",
      type: "image",
      title: "Athletic Squad in Royal Blue & Gold",
      category: "Squad",
      image: "/gallery/pca-champions-daylight-ground.jpg",
      alt: "Squad in blue uniforms on green grass",
      caption: "Official team photograph showcasing the PCA student athletes and trainers in their custom match jerseys.",
      sourceNote: "Team Portrait",
      aspect: "landscape",
      badge: "Jersey Unveiling"
    },
    {
      id: "g-pic-12",
      type: "image",
      title: "Individual Bowling & Batting Accolades",
      category: "Coaching",
      image: "/gallery/pca-trophy-handover-stage.jpg",
      alt: "Coach presenting individual trophy",
      caption: "Honoring players demonstrating rapid technical progress and competitive discipline.",
      sourceNote: "Player Development",
      aspect: "landscape",
      badge: "Progress Awards"
    },
    {
      id: "g-vid-7",
      type: "video",
      title: "Behind The Scenes - Squad Photo Shoot",
      category: "Squad",
      image: "/gallery/pca-team-trophy-table-pose.jpg",
      videoSrc: "/gallery/pca-team-photo-session-behind-scenes.mp4",
      alt: "Behind the scenes candid video of team getting ready",
      caption: "Candid video of players and coaches sharing smiles while preparing the championship photo session.",
      sourceNote: "Behind the Scenes Video",
      aspect: "landscape",
      duration: "0:07",
      badge: "Behind The Scenes"
    },
    {
      id: "g-pic-13",
      type: "image",
      title: "Tournament Silverware & Honors",
      category: "Trophies",
      image: "/gallery/pca-trophy-ceremony-wide.jpg",
      alt: "Trophies and cups on table with team in background",
      caption: "The complete set of tournament cups including Platinum Winner, Best Batsman, and Best Bowler on display.",
      sourceNote: "Silverware Showcase",
      aspect: "landscape",
      badge: "Silverware Collection"
    },
    {
      id: "g-pic-14",
      type: "image",
      title: "Player Milestone Recognition",
      category: "Celebration",
      image: "/gallery/pca-award-stage-sideview.jpg",
      alt: "Player milestone award on stage",
      caption: "Celebrating young cricket talents who proved their mettle in crunch match situations.",
      sourceNote: "Milestone Celebration",
      aspect: "landscape",
      badge: "Milestone Moment"
    },
    {
      id: "g-pic-15",
      type: "image",
      title: "The Winning Circle",
      category: "Trophies",
      image: "/gallery/pca-team-trophy-table-pose.jpg",
      alt: "Team posing together around trophies",
      caption: "PCA coaches and students gathered around their championship hardware.",
      sourceNote: "Championship Circle",
      aspect: "landscape",
      badge: "Winners"
    },
    {
      id: "g-pic-16",
      type: "image",
      title: "Smiles of Victory",
      category: "Squad",
      image: "/gallery/pca-team-trophy-table-smiles.jpg",
      alt: "Students smiling with coaches",
      caption: "The joy and pride of victory shared among teammates after months of rigorous morning and evening nets.",
      sourceNote: "Victory Smiles",
      aspect: "landscape",
      badge: "Pure Joy"
    },
    {
      id: "g-pic-17",
      type: "image",
      title: "Coaches Mentorship & Future Champions",
      category: "Coaching",
      image: "/gallery/pca-team-proud-moment.jpg",
      alt: "PCA coaches seated in front of students",
      caption: "Head Coach Prafull and senior academy coaches seated with their dedicated trainees.",
      sourceNote: "Mentorship Heritage",
      aspect: "landscape",
      badge: "Coaching Panel"
    },
    {
      id: "g-pic-18",
      type: "image",
      title: "Official PCA Academy Complex",
      category: "Ground",
      image: "/gallery/pca-team-ceremony-banner.jpg",
      alt: "PCA academy complex building and netting",
      caption: "Official Bowenpally facility frontage with coaching pavilion, nets, and open practice field.",
      sourceNote: "Bowenpally Facility",
      aspect: "landscape",
      badge: "Academy Grounds"
    },
    {
      id: "g-pic-19",
      type: "image",
      title: "Outfield Practice & Mentorship",
      category: "Ground",
      image: "/gallery/pca-coaches-and-squad-outfield.jpg",
      alt: "Coaches and squad on green outfield",
      caption: "Outfield coaching session addressing fielding agility, throwing techniques, and match temperament.",
      sourceNote: "Outfield Session",
      aspect: "landscape",
      badge: "Ground Drills"
    },
    {
      id: "g-pic-20",
      type: "image",
      title: "PCA Champions Celebration",
      category: "Trophies",
      image: "/gallery/pca-squad-trophy-celebration-table.jpg",
      alt: "Students raising medals around trophies",
      caption: "Student athletes holding medals up high in celebration of their tournament victory.",
      sourceNote: "Championship Glory",
      aspect: "landscape",
      badge: "Gold & Silver"
    },
    {
      id: "g-pic-21",
      type: "image",
      title: "Team Applause for Hard Work",
      category: "Celebration",
      image: "/gallery/pca-squad-applause-moment.jpg",
      alt: "Students clapping for teammates",
      caption: "Encouraging sports culture where every player's dedication is acknowledged and celebrated.",
      sourceNote: "Team Culture",
      aspect: "landscape",
      badge: "Academy Culture"
    }
  ],

  // 4-Pillar High Performance Pedagogy (Inspired by Coaching Beyond & elite standards)
  methodology: [
    {
      id: "technical",
      pillarNumber: "01",
      title: "Technical Biomechanics & Fundamentals",
      tagline: "Clean Footwork, High-Arm Leverage & Head Balance",
      iconName: "Target",
      description: "Cricket at the highest level is built upon repeatable, biomechanically sound movement. We break down each player's action frame by frame to eradicate technical flaws before they become bad habits.",
      quote: "Solid technique is not an aesthetic luxury; it is the protective shield that withstands extreme tournament pressure.",
      coach: "Prafull (Head Coach & MD)",
      keyPractices: [
        "Head-still alignment at the point of ball impact",
        "Front-foot & back-foot weight transfer equilibrium",
        "High-arm bowling gather with strong non-bowling arm pull",
        "Upright seam presentation and wrist lock mechanics"
      ],
      drills: [
        "Agility hurdle bowling stride pacing grids",
        "Batting tee & drop-ball stance isolation drills",
        "Slow-motion video review with coach side-by-side notes"
      ]
    },
    {
      id: "tactical",
      pillarNumber: "02",
      title: "Tactical Game Intelligence",
      tagline: "Field Awareness, Target Chasing & Death-Over Pacing",
      iconName: "Brain",
      description: "Nets practice is useless if a batsman cannot pierce a ring field or a bowler cannot bowl to their field setting. We train players to read captain setups, calculate run-rates, and think two balls ahead.",
      quote: "Anyone can swing in the nets; true cricketers decipher field gaps, calculate the bowler, and execute under pressure.",
      coach: "Rahul Sir (Senior Technical Coach)",
      keyPractices: [
        "Reading boundary vs saving field setups instantly",
        "Strike rotation mastery during middle-over squeeze",
        "Bowler-batsman cat-and-mouse duel strategies",
        "Defending low totals through aggressive dot-ball pressure"
      ],
      drills: [
        "Situational net scenarios (e.g. 28 runs required in 18 balls)",
        "Single-rotation drills with target boundary cones",
        "Field placement simulation on tactics whiteboards"
      ]
    },
    {
      id: "physical",
      pillarNumber: "03",
      title: "Athletic Conditioning & Sports Science",
      tagline: "Fast Acceleration, Rotational Power & Core Stamina",
      iconName: "Flame",
      description: "Modern cricket demands world-class athletes. Our conditioning curriculum builds sprinting explosiveness, core rotational torque for power-hitting, and joint stability to prevent lumbar and shoulder injuries.",
      quote: "Conditioning is not just about stamina; it is about staying razor-sharp and explosive in the 40th over under blistering heat.",
      coach: "Vamshi Sir (Fielding & Fitness Specialist)",
      keyPractices: [
        "Sprint mechanics and rapid shuttle acceleration",
        "Rotational core power for maximum bat-speed torque",
        "Deceleration and sliding technique for safe fielding",
        "Shoulder rotator cuff longevity and injury prevention"
      ],
      drills: [
        "Agility ladder speed drills with reaction cues",
        "Medicine ball rotational power throws",
        "Dynamic resistance band activations and cool-downs"
      ]
    },
    {
      id: "mental",
      pillarNumber: "04",
      title: "Mental Toughness & Champion Temperament",
      tagline: "Unbreakable Resilience, Focus Routines & Warrior Grit",
      iconName: "Shield",
      description: "True greatness is revealed when things go wrong. Inspired by performances like Aryan Cheera's fever triumph in the HCA League, we instill mental calmness, body language dominance, and fearless execution.",
      quote: "Talent can get you noticed, but mental character is what keeps you standing when the world pushes against you.",
      coach: "Sudheer Sir (Founding Mentor)",
      keyPractices: [
        "Developing unshakeable pre-delivery routines and focus",
        "Bouncing back instantly from a dropped catch or boundary",
        "Handling high-pressure HCA tournament environments",
        "Team-first camaraderie, sportsmanship, and humility"
      ],
      drills: [
        "Pressure-cooker net sessions (1 mistake = penalty drill)",
        "Mindset & situational decision debriefs after matches",
        "Warrior spirit case studies and peer leadership reviews"
      ]
    }
  ],

  // Structured Player Development Pathways (Inspired by Super Kings Academy)
  playerPathways: [
    {
      id: "grassroots",
      stageName: "Grassroots Cubs",
      ageBracket: "Ages 6 to 9",
      levelBadge: "Foundation Tier",
      summary: "Introducing young boys and girls to cricket through fun, high-energy coordination drills, safe soft-to-light leather progression, and pure love for the sport.",
      curriculum: [
        "Hand-eye coordination, catching cups & reflex games",
        "Correct batting grip, balanced stance & straight bat path",
        "Basic bowling grip with 3-step to 5-step run-up rhythm",
        "Running between the wickets with loud 'Yes/No/Wait' calls",
        "Fun agility obstacle circuits and team relay drills"
      ],
      matchExposure: "Fun intra-academy friendly matches & mini-field games",
      trainingFrequency: "3 to 4 Sessions / Week",
      coachRatio: "1 : 8 Dedicated Coach Ratio",
      outcomes: [
        "Natural athletic movement confidence",
        "Safe, disciplined fundamental technique",
        "Excitement and passion to pursue regular cricket"
      ]
    },
    {
      id: "cadets",
      stageName: "Foundation Cadets",
      ageBracket: "Ages 10 to 13",
      levelBadge: "Skill Acquisition Tier",
      summary: "Systematic technical transition to full protective gear and regulation leather-ball cricket. Focus on footwork precision, bowling run-up mechanics, and turf pitch nets.",
      curriculum: [
        "Full leather ball protective gear comfort & habits",
        "Front-foot and back-foot defensive and drive mechanics",
        "High-arm release, jump, and landing stride consistency",
        "Slip catching, high boundary takes & sliding stops",
        "Basics of spin negotiation and facing swing bowling"
      ],
      matchExposure: "Regular weekend intra-academy 20-over matches",
      trainingFrequency: "4 to 5 Sessions / Week",
      coachRatio: "1 : 8 Dedicated Coach Ratio",
      outcomes: [
        "Confidence to face fast bowling with leather ball",
        "Repeatable bowling action with accurate line and length",
        "Selection readiness for school and club age-group trials"
      ]
    },
    {
      id: "colts",
      stageName: "Development Colts",
      ageBracket: "Ages 14 to 17",
      levelBadge: "Competitive Development Tier",
      summary: "High-intensity tournament preparation. Biomechanical video feedback, situational stroke-play, specialized pace/spin coaching, and athletic conditioning.",
      curriculum: [
        "Slow-motion video analysis for swing and bowling action",
        "Power-hitting mechanics, bat speed & gap placement",
        "Bowling variations: yorkers, slower balls, googlies, arm balls",
        "Match tactics: death-overs pacing, field setting, target math",
        "Sports science conditioning for speed, power, and endurance"
      ],
      matchExposure: "Inter-academy tournaments & Hyderabad district club trials",
      trainingFrequency: "5 to 6 Sessions / Week",
      coachRatio: "1 : 8 Dedicated Coach Ratio",
      outcomes: [
        "Selection into school, district, and club tournament squads",
        "Tactical maturity to adapt to varying pitch conditions",
        "Conditioned athletic physique ready for senior cricket"
      ]
    },
    {
      id: "elite",
      stageName: "Elite Warriors & HCA Squad",
      ageBracket: "Ages 18+ & Senior Club",
      levelBadge: "High Performance Tier",
      summary: "Elite competitive excellence. Representation in official Hyderabad Cricket Association (HCA) league fixtures, advanced biomechanics, and warrior match temperament.",
      curriculum: [
        "Official HCA League tournament match campaigns",
        "High-pressure situational net simulations vs senior bowlers",
        "Custom biomechanical tuning for pace, spin revs, and power",
        "Mental conditioning, leadership, and match-day psychology",
        "Individual performance report cards & video archives"
      ],
      matchExposure: "Official HCA League matches & senior invitation trophies",
      trainingFrequency: "Daily Intensive Batches (Morning / Evening)",
      coachRatio: "High Performance Specialist Mentorship",
      outcomes: [
        "Official HCA League representation and match milestones",
        "Pathways towards state age-group and senior selections",
        "Elite match temperament and tactical dominance"
      ]
    }
  ],

  // Specialized Masterclasses & Clinics (Inspired by Coaching Beyond)
  specializedClinics: [
    {
      id: "pace-lab",
      title: "Fast Bowling Velocity & Biomechanics Lab",
      subtitle: "Pace, Swing & Run-Up Engineering",
      iconName: "Zap",
      targetGroup: "Medium & Fast Bowlers (Ages 12+)",
      format: "Specialized Weekly Masterclass",
      focusDrills: [
        "Run-up stride measurement & bounding rhythm optimization",
        "Non-bowling arm pull mechanics for maximum kinetic torque",
        "Seam presentation drills for outswing, inswing & wobble-seam",
        "Yorker and bouncer accuracy target grid execution"
      ],
      equipmentUsed: [
        "Stride pacing agility hurdles",
        "High-speed slow-motion video analysis",
        "Target bowling grid cones & spring stumps"
      ],
      benefit: "Unlocks 5–10 km/h additional bowling velocity while protecting the lower back and shoulder from stress injuries."
    },
    {
      id: "spin-academy",
      title: "Spin Bowling Flight & Deception Masterclass",
      subtitle: "Turn, Drift, Dip & Subtleties",
      iconName: "Target",
      targetGroup: "Off-Spin, Leg-Spin & Left-Arm Orthodox Bowlers",
      format: "Specialized Weekly Masterclass",
      focusDrills: [
        "Revolutions (revs) per minute enhancement drills",
        "Trajectory control: teasing flight vs flatter arm balls",
        "Googly, flipper, slider, and doosra deceptive releases",
        "Bowling in tandem and setting claustrophobic spin fields"
      ],
      equipmentUsed: [
        "Revs-tracking multi-seam practice balls",
        "Target pitch boxes for drift and landing grip",
        "Enclosed turf wickets"
      ],
      benefit: "Builds genuine wicket-taking deception and match intelligence to dismantle top-order batsmen on any pitch."
    },
    {
      id: "power-hitting",
      title: "Modern Power-Hitting & 360° Range Workshop",
      subtitle: "Bat Speed, Clean Contact & Boundary Clearing",
      iconName: "Flame",
      targetGroup: "Top-Order & Middle-Order Batsmen",
      format: "Weekend Intensive Workshop",
      focusDrills: [
        "Stable base posture and explosive hip-shoulder separation",
        "Extension through contact point for effortless lofted sixes",
        "Death-overs boundary clearing against yorkers & slower balls",
        "Modern innovations: scoop, ramp, and reverse sweeps"
      ],
      equipmentUsed: [
        "Weighted bat speed trainers",
        "High-tee and drop-ball impact stations",
        "Full-length open outfield boundary ropes"
      ],
      benefit: "Instills fearless boundary-striking capability without sacrificing solid defensive technique."
    },
    {
      id: "reflex-lab",
      title: "High-Reflex Fielding & Wicketkeeping Lab",
      subtitle: "Direct Hits, Reaction Drills & Safe Hands",
      iconName: "Shield",
      targetGroup: "All Enrolled Squad Members & Wicketkeepers",
      format: "Integrated Weekly Masterclass",
      focusDrills: [
        "Slip reflex deflection board reaction drills",
        "Sliding boundary stops and instant return throws",
        "Underarm flick and overarm laser direct-hit accuracy",
        "Wicketkeeping stance, soft hands, and lightning stumpings"
      ],
      equipmentUsed: [
        "Multi-angle reaction boards",
        "Boundary slide mats",
        "Target stump direct-hit wickets"
      ],
      benefit: "Transforms outfielders into genuine match-winners who create wickets out of half-chances."
    }
  ],

  // Batch Schedules & Training Timings (Super Kings Academy style)
  batchSchedules: [
    {
      id: "morning",
      name: "Morning Performance Batch",
      days: "Monday to Friday",
      timings: "6:00 AM – 8:30 AM",
      category: "Regular Academy",
      capacity: "Limited to 16 Players per session",
      badge: "Most Popular",
      idealFor: "Perfect for school and college players who want dedicated high-focus coaching before their academic day begins."
    },
    {
      id: "evening",
      name: "Evening High-Intensity Batch",
      days: "Monday to Friday",
      timings: "4:30 PM – 7:00 PM",
      category: "Regular Academy",
      capacity: "Limited to 16 Players per session",
      badge: "After-School Batch",
      idealFor: "Ideal for after-school training, featuring extensive turf net practice, live match simulations, and group fielding."
    },
    {
      id: "weekend",
      name: "Weekend Elite Intensive Batch",
      days: "Saturday & Sunday",
      timings: "6:30 AM – 9:30 AM & 4:00 PM – 6:30 PM",
      category: "Weekend Special",
      capacity: "Open for Weekend Enrollees",
      badge: "Weekend Intensive",
      idealFor: "Designed for students with tight weekday academic schedules or residing across greater Secunderabad/Hyderabad."
    },
    {
      id: "summer",
      name: "High-Performance Summer Bootcamp",
      days: "April & May (Daily)",
      timings: "6:00 AM – 9:30 AM & 4:30 PM – 7:00 PM",
      category: "Seasonal Special",
      capacity: "Limited Enrollment",
      badge: "Seasonal Bootcamp",
      idealFor: "An immersive 60-day cricket bootcamp covering biomechanics, video analysis, physical conditioning, and tournament matches."
    }
  ],

  // 4-Phase Daily Session Routine Structure
  dailySessionRoutine: [
    {
      phase: "01",
      duration: "15 Mins",
      title: "Dynamic Activation & Athletic Mobility",
      description: "Prepares muscles, elevates core temperature, and primes joints for high-speed rotational movement.",
      iconName: "Flame",
      activities: [
        "Cricket-specific dynamic stretches & hip mobility",
        "Speed ladder agility footwork",
        "Sprint deceleration and change-of-direction warm-up"
      ]
    },
    {
      phase: "02",
      duration: "45 Mins",
      title: "Technical Station & Biomechanics Drills",
      description: "Isolated skill stations with coach-led micro-corrections for batting stance, bowling action, and reflexes.",
      iconName: "Target",
      activities: [
        "Batting tee stance and weight-transfer reps",
        "Hurdle bowling stride pacing and high-arm release",
        "Slip reaction board catching and direct-hit throwing"
      ]
    },
    {
      phase: "03",
      duration: "45 Mins",
      title: "Live Turf Nets & Situational Match Play",
      description: "Putting technique under competitive pressure in our enclosed turf nets against pace and spin.",
      iconName: "Zap",
      activities: [
        "Full leather-ball pace and spin bowling duels",
        "Match scenarios (target chases, powerplay restrictions)",
        "Real-time technical video feedback from senior coaches"
      ]
    },
    {
      phase: "04",
      duration: "15 Mins",
      title: "Core Conditioning, Cool-Down & Debrief",
      description: "Ensures post-session physiological recovery and reinforces key mental learnings.",
      iconName: "Shield",
      activities: [
        "Core abdominal & shoulder rotator cuff strengthening",
        "Static cool-down stretching and hydration",
        "Coach individual debrief and daily milestone tracking"
      ]
    }
  ],

  // 3-Step Trial Assessment Protocol (Day-1 Experience)
  trialSteps: [
    {
      step: "01",
      title: "15-Minute Baseline Skill Assessment",
      duration: "15 Mins",
      description: "Our coaching staff evaluates the player's natural grip, stance balance, throwing mechanics, and reflex agility on test markers.",
      deliverable: "Initial technical baseline reading & fitness check"
    },
    {
      step: "02",
      title: "Live Net & Drill Station Experience",
      duration: "30 Mins",
      description: "The player joins a live net session with age-group peers, experiencing real coaching feedback on our turf pitches.",
      deliverable: "Hands-on batting & bowling evaluation under match conditions"
    },
    {
      step: "03",
      title: "Coach Consultation & Pathway Roadmap",
      duration: "15 Mins",
      description: "Our head coach sits down with the player and parents to review strengths, recommend the best batch tier, and answer questions.",
      deliverable: "Personalized player development roadmap & batch recommendation"
    }
  ],

  // Parent & Player FAQs
  faqs: [
    {
      id: "f1",
      question: "At what age can a child join PCA Cricket Academy?",
      answer: "We welcome young boys and girls starting from age 6 in our Grassroots Cubs program all the way through age 19+ in our Senior Club / HCA League squads. Training drills, ball weight, and pitch lengths are strictly calibrated to each age group.",
      category: "Trial & Enrollment"
    },
    {
      id: "f2",
      question: "What equipment do I need to bring for the free trial session?",
      answer: "For the trial session, the player only needs to wear comfortable athletic sports clothes and sports shoes (running shoes or rubber studs). PCA provides bats, pads, gloves, helmets, and cricket balls for the trial so you do not need to purchase equipment beforehand.",
      category: "Equipment & Safety"
    },
    {
      id: "f3",
      question: "What is the coach-to-student ratio during regular batches?",
      answer: "We maintain a strict coach-to-student ratio of 1:8 to 1:10 across all training sessions. This ensures every student gets ample net time, dedicated video feedback, and individualized technical corrections rather than being lost in a crowd.",
      category: "Training & Batches"
    },
    {
      id: "f4",
      question: "Do academy players get opportunities to play official league matches?",
      answer: "Yes! PCA actively competes in official Hyderabad Cricket Association (HCA) league fixtures, inter-academy invitation cups, and regular weekend matches. Enrolled players who demonstrate discipline and skill earn spots in our official league teams.",
      category: "Match Exposure"
    },
    {
      id: "f5",
      question: "Can players balance cricket coaching with school exams and switch batches?",
      answer: "Absolutely. We understand that academic demands change during exams. With simple advance notice to our coaching desk, enrolled players can switch between morning (6:00 AM – 8:30 AM) and evening (4:30 PM – 7:00 PM) batches, or pause during final exams.",
      category: "Trial & Enrollment"
    },
    {
      id: "f6",
      question: "Are girls and beginners welcomed at PCA?",
      answer: "Yes, 100%! We encourage girls and boys of all skill levels. For absolute beginners, our Grassroots coaches focus on building enjoyment, hand-eye coordination, and confidence before progressing to competitive leather-ball nets.",
      category: "Training & Batches"
    }
  ]
};
