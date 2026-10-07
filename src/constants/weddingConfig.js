/**
 * Centralized Wedding Configuration & Content
 * Contains all text, ceremonial announcements, dates, and family honors.
 */

export const WEDDING_CONFIG = {
  // Couple Information
  couple: {
    bride: {
      firstName: "Amatullah",
      fullName: "Amatullah Dhulebwala",
      arabic: "أمة الله",
      relation: "Beloved Daughter",
    },
    groom: {
      firstName: "Abbas Ali",
      fullName: "Abbas Ali Naharwala",
      arabic: "عباس علي",
      relation: "Beloved Son",
    },
    monogram: "A & A",
  },

  // Parents Information
  parents: {
    brideParents: "Ajab & Kaied Johar Dhulebwala",
    groomParents: "Nisrin ben & Ali Asgar bhai Naharwala",
  },

  // Nikah Solemnization Details
  nikah: {
    authority: "Syedna Aali Qadar Mufaddal Saifuddin (T.U.S)",
    authorityFull:
      "Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S)",
    dateGregorian: "24th January 2025",
    dateHijri: "25 Rajab-ul-Asab 1447 H",
    city: "Surat, Gujarat, India",
  },

  // Countdown Celebration Target Date (ISO format)
  countdownTarget: "2026-10-21T00:00:00",
  receptionDate: "25th October 2026",

  // Sacred Invocation Lines
  sacredText: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    vasilaLine1: "By the grace of Allah Subhanahu,",
    vasilaLine2:
      "Vasila-e-Panjetan Pak (S.W), Ahle Bait (S.W), Imam-uz-Zaman (S.W)",
    vasilaLine3:
      "& dua Mubarak of Al-Hayul-Muqaddas Syedna Mohammed Burhanuddin (R.A.)",
    vasilaLine4:
      "& Blessings of Dai uz Zaman his Holiness Syedna Aali Qadar Mufaddal Saifuddin Maula (T.U.S)",
    nikahDeclaration:
      "Nikah solemnised on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S) on 24th January 2025 (25 Rajab-ul-Asab 1447 H) in Surat.",
    invitationPreamble: "Thereafter we",
    invitationHosts: "Nisrin & Ali Asgar bhai Naharwala",
    invitationRequest:
      "cordially request your presence to grace the Wedding Ceremony of our beloved daughter",
    groomParentage: "(D/O Ajab ben & Kaied Johar Dhulebwala)",
  },

  // Family Honors & Blessings
  familyHonors: {
    withBlessingsOf: [
      "LATE ZAHRA BEN & LATE KURBAN HUSSAIN NAHARWALA (DADA-DADI)",
      "LATE AMENA BEN & LATE ABBAS ALI KALIYANPURWALA (NANI-NANA)",
    ],
    specialRequest: [
      "HUSSAINA & TAHA HUSSAIN NAHARWALA (BHABI-BHAI)",
      "TASNIM NAHARWALA (SISTER)",
    ],
    withBestComplimentsFrom: [
      "Faiji-fuaji, Kaka-kaki, Masi-masaji, Mama-mami,",
      "All cousins, All Naharwala and Kaliyanpurwala family.",
    ],
  },

  // Event Program Timeline
  program: {
    intro: {
      lead: "With joy in our hearts,",
      invitation: "Naharwala Family invites you to the Wedding.",
    },
    residence: {
      title: "Our Residence",
      address: "Shastri Colony Dungarpur, Rajasthan",
    },
    events: [
      {
        id: "darees",
        title: "Darees",
        titleArabic: "دارس",
        date: "18th October",
        dayOfWeek: "Sunday",
        fullDate: "Sunday, 18th October 2026",
        venue: "At Shastri Colony, Dungarpur",
        venueDetails: "Shastri Colony, Dungarpur",
        description:
          "The couple will recite Darees in presence of the community and elders.",
      },
      {
        id: "manak-thamb",
        title: "Manak Thamb",
        titleArabic: "مانك تهامب",
        date: "21st October",
        dayOfWeek: "Wednesday",
        fullDate: "Wednesday, 21st October 2026",
        venue: "At Shastri Colony, Dungarpur",
        venueDetails: "Shastri Colony, Dungarpur",
        description:
          "Auspicious ceremonial pillar installation marking the joyous commencement of wedding celebrations.",
      },

      {
        id: "mama-musala",
        title: "Mama Musala",
        titleArabic: "حفل ماما مصلى المبارك",
        date: "23rd October",
        dayOfWeek: "Friday",
        fullDate: "Friday, 23rd October 2026",
        venue: "At Pan Wadi, Dungarpur",
        venueDetails: "Pan Wadi, Dungarpur",
        description:
          "Maternal blessings ceremony filled with cherished family traditions, auspicious rituals, and heartfelt Duas.",
      },
      {
        id: "procession",
        title: "Majalis & Procession",
        titleArabic: "مجلس الفرح وموكب الفرح المبارك",
        date: "24th October",
        dayOfWeek: "Saturday",
        fullDate: "Saturday, 24th October 2026",
        venue: "At Pan Wadi, Dungarpur",
        venueDetails: "Pan Wadi, Dungarpur",
        description:
          "Sacred Khushi Ni Majlis prayers followed by the grand celebratory wedding procession with family, elders, and cherished traditions.",
      },
      {
        id: "reception",
        title: "Reception",
        titleArabic: "حفل الاستقبال والوليمة",
        date: "25th October",
        dayOfWeek: "Sunday",
        fullDate: "Sunday, 25th October 2026",
        venue: "At Pan Wadi, Dungarpur",
        venueDetails: "Pan Wadi, Dungarpur",
        description:
          "Celebratory royal banquet and wedding reception to welcome, honour, and bless the newly married couple.",
      },
    ],
  },

  // Venue & Travel Directions
  venue: {
    name: "Pan Wadi",
    subHall: "Grand Celebration Grounds & Enclave",
    address: "Pan Wadi, Dungarpur, Rajasthan, India",
    city: "Dungarpur",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Pan+Wadi+Dungarpur+Rajasthan",
    valetNote: "Complimentary guest parking available at the venue entrance.",
    locations: [
      {
        id: "pan-wadi",
        name: "Pan Wadi",
        role: "Mama Musala, Majalis & Reception",
        dates: "23rd, 24th & 25th October",
        address: "Pan Wadi, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Pan+Wadi,+Dungarpur,+Rajasthan",
        googleMapsUrl:
          "https://maps.google.com/?q=Pan+Wadi+Dungarpur+Rajasthan",
        type: "Celebration Venue",
        highlights:
          "Maternal blessings ceremony, celebratory majalis prayers, grand procession & royal reception banquet.",
      },
      {
        id: "shastri-colony",
        name: "Shastri Colony",
        role: "Manak Thamb & Mehendi",
        dates: "18th, 21st & 22nd October",
        address: "Shastri Colony, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Shastri+Colony,+Dungarpur,+Rajasthan",
        googleMapsUrl:
          "https://maps.google.com/?q=Shastri+Colony+Dungarpur+Rajasthan",
        type: "Ceremonial Venue",
        highlights:
          "Main ceremonial pillar consecration & celebratory henna evening.",
      },
      {
        id: "residence",
        name: "Naharwala Residence",
        role: "Family Residence",
        dates: "Throughout Festivities",
        address: "Shastri Colony, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Shastri+Colony,+Dungarpur,+Rajasthan",
        googleMapsUrl:
          "https://maps.google.com/?q=Shastri+Colony+Dungarpur+Rajasthan",
        type: "Private Family Residence",
        highlights:
          "Warm hospitality and family welcomes throughout the wedding celebrations.",
      },
    ],
  },

  // Calendar Event Details for Google Calendar / iCal
  calendar: {
    title: "Wedding Ceremony: Abbas Ali & Amatullah",
    description:
      "Wedding ceremony of Abbas Ali (S/O Nisrin ben & Ali Asgar bhai Naharwala) with Amatullah (D/O Ajab & Kaied Johar Dhulebwala) . Nikah on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S).",
    location: "Pan Wadi & Shastri Colony, Dungarpur, Rajasthan",
    startDate: "20261018T173000",
    endDate: "20261025T230000",
  },

  // Traditional Closing Prayer (Dua)
  closingDua: {
    arabic:
      "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english:
      "May Allah bless you both, shower His blessings upon you, and unite you both in goodness.",
    gratitude:
      "With heartfelt gratitude from the Naharwala & Dhulebwala families.",
  },
};
