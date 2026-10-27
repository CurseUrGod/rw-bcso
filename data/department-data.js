window.DEPARTMENT_DATA = {
  "branchMapStatus": "Branch and rank details are sourced from the uploaded BCSO SOP PDFs. The Department Structure PDF defines the rank ladder and chain-of-command expectation; Special Certifications names SWAT, CID, TEU / HEAT and Air-1 as division-application routes.",
  "branches": [
    {
      "id": "command",
      "name": "Command & Chain of Command",
      "summary": "The Department Structure SOP requires personnel to follow the chain of command for operational clarity and accountability.",
      "sourceStatus": "Source-based: Department Structure SOP. Branch names are portal grouping labels, not additional rank titles.",
      "topics": [
        "Sheriff / Under Sheriff / Captain / Lieutenant / Sergeant / Corporal responsibilities",
        "Policy, discipline, activity, and leave references",
        "Follow the proper reporting structure for orders, requests, and concerns"
      ],
      "links": [
        {
          "label": "Department Structure",
          "route": "structure"
        },
        {
          "label": "Code of Conduct",
          "route": "conduct"
        },
        {
          "label": "Discipline & Infractions",
          "route": "discipline"
        }
      ]
    },
    {
      "id": "patrol",
      "name": "Patrol Operations",
      "summary": "Day-to-day patrol, calls for service, radio procedures, traffic stops, pursuits, arrests, and impounds.",
      "sourceStatus": "Source-based from the Patrol, Communications, Traffic, Arrest, Impounding, and Quick Reaction SOPs.",
      "topics": [
        "General patrol and response-to-call procedures",
        "Radio callouts, status updates, and emergency traffic",
        "Traffic enforcement and vehicle-pursuit protocols",
        "Arrest, booking, evidence, and vehicle impound"
      ],
      "links": [
        {
          "label": "Patrol Operations",
          "route": "patrol"
        },
        {
          "label": "Communications & Radio",
          "route": "communications"
        },
        {
          "label": "Traffic & Pursuits",
          "route": "traffic"
        },
        {
          "label": "Arrest & Booking",
          "route": "arrest"
        },
        {
          "label": "Impounding",
          "route": "impounding"
        }
      ]
    },
    {
      "id": "investigations",
      "name": "Criminal Investigation Division",
      "summary": "CID oversees investigations, case management, evidence, informants, interviews, warrants, and case closure.",
      "sourceStatus": "Source-based from CID SOPs. The document identifies its own internal structure and application criteria.",
      "topics": [
        "CID trainee, detective, supervisor, and command roles",
        "Case assignment, evidence collection and preservation",
        "Interviews, interrogations, informants, and warrants"
      ],
      "links": [
        {
          "label": "CID SOPs",
          "route": "cid"
        },
        {
          "label": "Division Application",
          "route": "applications"
        }
      ]
    },
    {
      "id": "special-operations",
      "name": "Special Divisions & Certifications",
      "summary": "Uploaded Special Certifications SOP identifies SWAT, CID, TEU / HEAT, and Air-1 as division application routes, and HRT, AIM, HEAT, BIKE as certification guidelines.",
      "sourceStatus": "Source-based; see Special Certifications for rank and operational conditions.",
      "topics": [
        "SWAT",
        "Criminal Investigation Division (CID)",
        "Traffic Enforcement Unit / HEAT",
        "Air-1 / HRT, AIM, HEAT Interceptors, BIKE Motorcycle"
      ],
      "links": [
        {
          "label": "Special Certifications",
          "route": "certifications"
        },
        {
          "label": "SWAT",
          "route": "swat"
        },
        {
          "label": "TEU / HEAT",
          "route": "teu"
        },
        {
          "label": "Air-1",
          "route": "air1"
        },
        {
          "label": "BIKE Motorcycle",
          "route": "bike"
        }
      ]
    },
    {
      "id": "training",
      "name": "Academy & Training",
      "summary": "Police Academy provides an entry training checklist and requires command staff or the Head FTO to approve the final evaluation.",
      "sourceStatus": "Source-based from Police Academy and Department Structure SOPs. No separate FTO application process is stated.",
      "topics": [
        "Orientation, uniforms, and equipment",
        "Classroom modules: case law, 10-codes, penal code, keybinds",
        "Field training: stops, pursuits, arrests, reports, evidence, impounds, robbery, hostages, clearing",
        "Final evaluation approval by Command Staff or Head FTO"
      ],
      "links": [
        {
          "label": "Police Academy",
          "route": "training"
        },
        {
          "label": "Special Certifications",
          "route": "certifications"
        }
      ]
    }
  ],
  "divisions": [
    {
      "id": "swat",
      "name": "Special Weapons & Tactics (SWAT)",
      "branch": "Special Divisions & Certifications",
      "summary": "Listed in the Special Certifications SOP as a division requiring an application.",
      "scope": [
        "Division application is required",
        "A separate SWAT SOP was not included in the supplied PDF set; use current command direction."
      ],
      "status": "Application route confirmed; eligibility / activation details not stated in the supplied PDFs.",
      "targetType": "Division"
    },
    {
      "id": "cid",
      "name": "Criminal Investigation Division (CID)",
      "branch": "Criminal Investigation Division",
      "summary": "Investigates serious criminal offenses and manages long-term cases, evidence, and warrants.",
      "scope": [
        "CID trainee, detective, supervisor, and command structure",
        "Application requires at least Senior Deputy, no active discipline, professional conduct, formal email application and approval by Division Head and Command Staff."
      ],
      "status": "Detailed SOP provided.",
      "targetType": "Division"
    },
    {
      "id": "teu",
      "name": "Traffic Enforcement Unit (TEU) / HEAT",
      "branch": "Special Divisions & Certifications",
      "summary": "HEAT interceptor eligibility and use conditions are specified in Special Certifications and Patrol SOPs.",
      "scope": [
        "Deputy 2 minimum for HEAT certification and use",
        "3:1 deputy-to-vehicle ratio; maximum three HEAT vehicles in use",
        "No PIT, no transport, one HEAT/BIKE unit per chase; not everyday patrol vehicles."
      ],
      "status": "Source-based from Special Certifications and Patrol Operations.",
      "targetType": "Division / Certification"
    },
    {
      "id": "air1",
      "name": "Air-1 / HRT",
      "branch": "Special Divisions & Certifications",
      "summary": "HRT / helicopter certification guidance and deployment minimum are stated in Special Certifications.",
      "scope": [
        "Deputy 2 minimum to certify and use HRT / Air-1",
        "Five officers clocked in and on patrol to pull out Air-1",
        "Police Vehicles SOP lists Maverick and Conda helicopters at Deputy 2."
      ],
      "status": "Source-based; separate flight operations SOP not included in this PDF set.",
      "targetType": "Division / Certification"
    }
  ],
  "certifications": [
    {
      "id": "hrt",
      "name": "HRT (Air-1 / Helicopters)",
      "summary": "Helicopter / Air-1 certification track.",
      "sourceStatus": "Special Certifications SOP",
      "eligibility": "Rank required to certify and use: Deputy 2. There must be 5 officers clocked in and on patrol to pull out Air-1.",
      "requirements": "Use the published Air-1 conditions and any additional command direction.",
      "targetType": "Certification"
    },
    {
      "id": "aim",
      "name": "AIM (Class 2 & 3 Firearms)",
      "summary": "Agency Issued Munitions qualification for Class 2 and Class 3 firearms.",
      "sourceStatus": "Special Certifications SOP",
      "eligibility": "Rank to certify: Deputy 1. Class 2 use: Deputy 1. Class 3 use: Deputy 2.",
      "requirements": "Authorized weapons: MP5 and Shotgun (Class 2); Carbine Rifle (Class 3). Adversary must actively use a shoulder-mounted or automatic Class 2/3 firearm; match use of force to the maximum extent possible.",
      "targetType": "Certification"
    },
    {
      "id": "heat",
      "name": "HEAT (Interceptors)",
      "summary": "High-performance interceptor certification and use restrictions.",
      "sourceStatus": "Special Certifications SOP",
      "eligibility": "Rank required to certify and use: Deputy 2.",
      "requirements": "3:1 deputy-to-vehicle ratio; maximum three HEAT vehicles. HEAT/BIKE may not PIT or transport; only one HEAT/BIKE unit per chase; not for everyday patrol. Patrol SOP restricts their use to suspect vehicles known to obtain extreme speeds.",
      "targetType": "Certification"
    },
    {
      "id": "bike",
      "name": "BIKE (Motorcycle)",
      "summary": "Motorcycle certification and use restrictions.",
      "sourceStatus": "Special Certifications SOP",
      "eligibility": "Rank required to certify and use: Deputy 2.",
      "requirements": "3:1 deputy-to-vehicle ratio; maximum three bikes. HEAT/BIKE may not PIT or transport; only one HEAT/BIKE unit per chase; not for everyday patrol. Patrol SOP restricts their use to suspect vehicles known to obtain extreme speeds.",
      "targetType": "Certification"
    }
  ]
};
