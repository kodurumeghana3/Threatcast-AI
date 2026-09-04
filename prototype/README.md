# ThreatCast AI

## AI-Based Network Attack Forecasting

ThreatCast AI is an AI-powered cybersecurity system designed to **forecast the next possible stage of a network attack before it occurs**.

Traditional security systems mainly focus on detecting attacks after suspicious activity has already started. ThreatCast AI goes a step further by analyzing network activity and attacker behavior to identify patterns and predict what an attacker may do next.

---

## Problem Statement

**SIH 2026 – AI-Based Network Attack Forecasting**

Modern cybersecurity systems generate large amounts of alerts and often focus on detecting individual malicious events. However, cyberattacks usually happen as a sequence of actions across multiple stages.

There is a need for a system that can:

* Analyze network traffic and security events
* Understand the sequence of attacker activities
* Identify the current stage of an attack
* Predict the likely next attack technique
* Provide an understandable risk assessment
* Help security teams take preventive action

---

## Proposed Solution

ThreatCast AI combines **Machine Learning, Network Traffic Analysis, and the MITRE ATT&CK framework** to forecast possible future attack techniques.

### Workflow

```text
Network Traffic / Security Events
              ↓
        Data Processing
              ↓
      Feature Extraction
              ↓
       ML Prediction Model
              ↓
 Current Attack Technique
              ↓
   Next Technique Forecast
              ↓
 Risk Score + Explanation
              ↓
      SOC Dashboard
```

---

## Key Features

### 1. Attack Detection

Analyzes network activity and identifies suspicious or malicious behavior.

### 2. Attack Stage Identification

Maps observed activities to relevant stages and techniques using the MITRE ATT&CK framework.

### 3. Next Attack Prediction

Uses machine learning to predict the technique or attack stage that is most likely to occur next.

### 4. Risk Assessment

Generates a risk score based on the current activity and predicted future behavior.

### 5. Explainable Predictions

Provides understandable reasons for why a particular attack technique was predicted.

### 6. SOC Dashboard

Displays:

* Network risk level
* Current attack stage
* Predicted next technique
* Confidence score
* Attack timeline
* Security alerts
* Recommended actions

---

## Technology Stack

### Machine Learning

* Python
* Scikit-learn
* Pandas
* NumPy

### Cybersecurity

* MITRE ATT&CK Framework
* Network Intrusion Detection
* Attack Lifecycle Analysis

### Datasets

* CICIDS2017
* UNSW-NB15

### Backend

* FastAPI

### Frontend

* React.js
* HTML/CSS
* JavaScript

### Database

* MongoDB / PostgreSQL

---

## Machine Learning Approach

ThreatCast AI follows a sequential prediction approach.

The model learns relationships between previously observed attack activities and subsequent techniques.

For example:

```text
Reconnaissance
      ↓
Initial Access
      ↓
Execution
      ↓
Persistence
      ↓
Privilege Escalation
      ↓
Lateral Movement
```

If the system identifies a current technique such as **Reconnaissance**, it analyzes learned patterns to estimate which technique or stage is likely to appear next.

---

## MITRE ATT&CK Integration

The **MITRE ATT&CK framework** provides a structured representation of adversary tactics and techniques.

ThreatCast AI uses ATT&CK concepts to:

* Classify attacker behavior
* Map network activities to techniques
* Represent attack progression
* Improve prediction interpretability
* Display predicted techniques in a meaningful way

---

## Dataset

### CICIDS2017

CICIDS2017 provides labeled network traffic containing both benign and various attack activities. It can be used for training and evaluating network intrusion detection models.

### UNSW-NB15

UNSW-NB15 contains realistic network traffic and multiple attack categories, making it useful for cybersecurity machine-learning experiments.

---

## System Architecture

```text
                ┌──────────────────────┐
                │ Network Traffic Data │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Data Preprocessing   │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Feature Extraction   │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Attack Detection     │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ ATT&CK Mapping       │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Sequence Prediction  │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ Risk & Explanation   │
                └──────────┬───────────┘
                           ↓
                ┌──────────────────────┐
                │ SOC Dashboard        │
                └──────────────────────┘
```

---

## Expected Output

The system provides a dashboard showing information such as:

```text
NETWORK STATUS:        HIGH RISK

Current Stage:
Reconnaissance

Current Technique:
Network Service Scanning

Predicted Next Technique:
Initial Access

Prediction Confidence:
91%

Risk Score:
87 / 100

Recommended Action:
Increase monitoring and investigate
suspicious source activity.
```

---

## Advantages

* Moves from **detection to prediction**
* Helps security teams identify potential future activity
* Reduces reaction time
* Provides a visual attack timeline
* Uses a standardized cybersecurity framework
* Provides explainable predictions
* Can be extended for real-time security monitoring

---

## Future Scope

* Real-time network traffic ingestion
* Integration with SIEM and SOC platforms
* Real-time attack forecasting
* Advanced deep-learning sequence models
* Automated threat-response recommendations
* Continuous model learning
* Cloud-based deployment
* Integration with multiple threat-intelligence sources

---

## Project Goal

The primary goal of ThreatCast AI is to transform cybersecurity from a **reactive approach** into a more **predictive and proactive approach** by forecasting possible attacker behavior before the next stage of an attack occurs.

---

## Team

**Project:** ThreatCast AI

**Problem Statement:** SIH26153 – AI-Based Network Attack Forecasting

**Domain:** Cybersecurity + Artificial Intelligence

**Institution:** MVSR Engineering College

**Hackathon:** Smart India Hackathon 2026

Prototype Link : https://threatcast-bf4vdurs.manus.space
