window.DEPARTMENT_DATA = {
  "ranks": [
    {
      "name": "Cadet",
      "summary": "Entry-level training. Completes academy and FTO evaluations before promotion to Probationary Deputy."
    },
    {
      "name": "Probationary Deputy",
      "summary": "Patrol and calls-for-service duties while demonstrating competence before advancement to Deputy 1."
    },
    {
      "name": "Deputy 1",
      "summary": "Fully established deputy who performs standard law-enforcement duties independently."
    },
    {
      "name": "Deputy 2",
      "summary": "Experienced independent patrol rank and minimum rank for HRT, HEAT, and BIKE certifications/use where applicable."
    },
    {
      "name": "Deputy 3",
      "summary": "Experienced field deputy who may assist with recruit training."
    },
    {
      "name": "Senior Deputy",
      "summary": "Senior field personnel who mentor lower-ranking deputies and assist with training."
    },
    {
      "name": "Corporal",
      "summary": "First-line leadership supporting Sergeants and providing field oversight."
    },
    {
      "name": "Sergeant",
      "summary": "First formal command-level supervisors responsible for daily operations and field discipline."
    },
    {
      "name": "Lieutenant",
      "summary": "Mid-level command coordinating field operations, Sergeants, and specialized activities."
    },
    {
      "name": "Captain",
      "summary": "Senior operational leadership over major departmental activities and policy implementation."
    },
    {
      "name": "Under Sheriff",
      "summary": "High command assisting in department-wide administration and operational direction."
    },
    {
      "name": "Sheriff",
      "summary": "Highest-ranking authority within the BCSO."
    }
  ],
  "divisions": [
    {
      "id": "swat",
      "name": "SWAT",
      "type": "Division",
      "summary": "Specialized tactical operations. Assignment is subject to the BCSO selection and approval process.",
      "requirements": [
        "Division requests are submitted through the BCSO Discord Appy workflow.",
        "Follow department-wide chain-of-command, use-of-force, pursuit, and documentation policies."
      ]
    },
    {
      "id": "cid",
      "name": "Criminal Investigation Division (CID)",
      "type": "Division",
      "summary": "Serious criminal investigations, long-term cases, evidence, warrants, and case management.",
      "requirements": [
        "Minimum rank: Senior Deputy.",
        "Maintain an exemplary record without active disciplinary action.",
        "Demonstrate professional conduct and submit a formal request through BCSO Discord Appy.",
        "Approval by the Division Head and Command Staff is required."
      ]
    },
    {
      "id": "teu",
      "name": "Traffic Enforcement Unit / HEAT",
      "type": "Division",
      "summary": "Specialized traffic enforcement and high-speed interception.",
      "requirements": [
        "HEAT certification and operation require Deputy 2.",
        "Deployment ratio: one HEAT vehicle per three deputies clocked in; maximum three vehicles.",
        "Use only for supercars or vehicles known to reach extreme speeds.",
        "No more than one HEAT or BIKE unit per pursuit.",
        "HEAT vehicles are not everyday patrol vehicles."
      ]
    },
    {
      "id": "air1",
      "name": "Air-1 / HRT",
      "type": "Division / Certification",
      "summary": "Law-enforcement aviation operations supporting patrol, pursuits, and other incidents.",
      "requirements": [
        "HRT certification and operation require Deputy 2.",
        "At least five officers must be clocked in and actively on patrol to deploy Air-1.",
        "Observe hostage demands and operational restrictions."
      ]
    }
  ],
  "certifications": [
    {
      "id": "hrt",
      "name": "HRT — Air-1 / Helicopters",
      "rank": "Deputy 2 to certify and operate",
      "requirements": [
        "At least five officers must be clocked in and actively on patrol to deploy Air-1.",
        "Helicopter operations must comply with applicable hostage demands and operational restrictions."
      ]
    },
    {
      "id": "aim",
      "name": "AIM — Class 2 & Class 3 Firearms",
      "rank": "Deputy 1 to certify; Deputy 2 to use Class 2; Senior Deputy to use Class 3",
      "requirements": [
        "Class 2 authorized firearms: SMG and shotgun.",
        "Class 3 authorized firearm: Carbine Rifle.",
        "Use only in response to adversaries actively using shoulder-mounted or automatic firearms of the corresponding class.",
        "Match force to the opposing threat as far as reasonably possible.",
        "Certification is obtained through department training."
      ]
    },
    {
      "id": "heat-cert",
      "name": "HEAT — Interceptor",
      "rank": "Deputy 2 to certify and operate",
      "requirements": [
        "Three deputies per available HEAT vehicle; no more than three HEAT vehicles at one time.",
        "For pursuit use, the suspect vehicle must be a supercar or known to achieve extreme speeds.",
        "Only one HEAT or BIKE unit may participate in a pursuit.",
        "Not for everyday patrol; no suspect transport unless absolutely necessary."
      ]
    }
  ]
};
