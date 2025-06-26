import React, { useState } from 'react';

const Actions = () => {
  const [activeSolution, setActiveSolution] = useState('TranscriptX');

  const [activeTranscriptExample, setActiveTranscriptExample] = useState('Example 1');

  const [showComparison, setShowComparison] = useState(true);

  const transcriptExamples = {
    'Example 1': {
      doctorDictation: `*Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today, October 26th, 2023. Chief complaint... uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently, can go up to 8/10 after exercise. Some morning stiffness, lasts maybe 15 minutes. No significant swelling reported, denies locking or giving way. Uh... tried over-the-counter ibuprofen with some partial relief. No history of trauma. Objective: Gait is non-antalgic. Right knee exam: No effusion visible. Mild tenderness to palpation over the medial joint line. McMurray's test is negative. Lachman and drawer tests stable. Range of motion is full, though terminal flexion elicits some discomfort medially. Assessment: Likely medial compartment osteoarthritis of the right knee. Differential includes medial meniscus tear, although less likely given stable exam. Plan: Continue with ibuprofen as needed. Start physical therapy for strengthening and stretching exercises. Follow up in 4 weeks or sooner if symptoms worsen. Consider MRI if no improvement with conservative management.`,
      aiGeneratedNote: `Patient: Sarah Chen
DOB: 03/22/1978
Date of Service: October 26, 2023

Chief Complaint:
Right knee pain x 3 months.

Subjective:
Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache located medially. Pain worsens with activity, particularly stair climbing. Pain rated 6/10 currently, increasing to 8/10 post-exercise. Reports approximately 15 minutes of morning stiffness. Denies significant swelling, locking, or episodes of giving way. Partial relief noted with over-the-counter ibuprofen. No history of trauma.

Objective:
Gait is non-antalgic. Right knee exam: No effusion. Mild tenderness to palpation over medial joint line. McMurray's test negative. Lachman and drawer tests stable. Range of motion full, though terminal flexion elicits medial discomfort.

Assessment:
Likely medial compartment osteoarthritis of right knee. Differential includes medial meniscus tear (less likely given stable exam).

Plan:
1. Continue ibuprofen as needed.
2. Start physical therapy for strengthening and stretching exercises.
3. Follow up in 4 weeks or sooner if symptoms worsen.
4. Consider MRI if no improvement with conservative management.`
    },
    'Example 2': {
      doctorDictation: `Okay, patient, John Smith, DOB 1/15/1965, seen today, November 1st, 2023. Chief complaint is chronic lower back pain, radiating down both legs, mostly left. Started about 6 months ago after lifting a heavy box. Subjective: Pain is constant, aching, rates 7/10 usually. Worse with prolonged standing or sitting. Better with lying down. Denies numbness or tingling. Has tried heat packs, stretching, and over-the-counter pain relievers with minimal effect. Objective: Patient ambulates with a slight limp. Lumbar spine exam reveals mild paraspinal muscle tenderness. Range of motion reduced in flexion. Straight leg raise positive on the left at 45 degrees, negative on the right. Motor strength 5/5 bilateral lower extremities. Sensation intact to light touch. Assessment: Chronic lower back pain, likely degenerative disc disease with possible left L5-S1 radiculopathy. Plan: Refer to physical therapy for core strengthening and stretching. Discuss epidural steroid injection with patient. Prescribe cyclobenzaprine for muscle spasms. Follow up in 3 weeks.`,
      aiGeneratedNote: `Patient: John Smith
DOB: 01/15/1965
Date of Service: November 1, 2023

Chief Complaint:
Chronic lower back pain radiating down both legs, predominantly left, x 6 months.

Subjective:
Patient reports constant, aching lower back pain, rated 7/10, worsening with prolonged standing/sitting, improved with lying down. Denies numbness or tingling. Minimal relief with heat packs, stretching, and OTC pain relievers.

Objective:
Ambulates with slight limp. Lumbar spine exam: mild paraspinal muscle tenderness. Reduced lumbar flexion. Left straight leg raise positive at 45 degrees, right negative. Motor strength 5/5 BLE. Sensation intact.

Assessment:
Chronic lower back pain, likely degenerative disc disease with possible left L5-S1 radiculopathy.

Plan:
1. Refer to physical therapy for core strengthening and stretching.
2. Discuss epidural steroid injection.
3. Prescribe cyclobenzaprine for muscle spasms.
4. Follow up in 3 weeks.`
    },
    'Example 3': {
      doctorDictation: `Patient, Maria Garcia, DOB 8/10/1990, here for a follow-up on hypertension. Seen today, December 5th, 2023. Blood pressure readings at home have been inconsistent, ranging from 130/80 to 150/95. Subjective: Denies headaches, dizziness, or chest pain. Adheres to a low-sodium diet most of the time but admits occasional fast food. Exercise is infrequent. Taking hydrochlorothiazide 25mg daily. Objective: BP today 145/90. Pulse 72. Lungs clear to auscultation. Heart sounds regular rate and rhythm. No edema. Assessment: Uncontrolled hypertension. Likely related to inconsistent diet adherence and lack of regular exercise. Plan: Reinforce low-sodium diet and encourage regular exercise (30 minutes of moderate activity most days of the week). Increase hydrochlorothiazide to 50mg daily. Schedule follow up in 2 weeks for repeat BP check. Consider adding a second agent if BP remains elevated.`,
      aiGeneratedNote: `Patient: Maria Garcia
DOB: 08/10/1990
Date of Service: December 5, 2023

Chief Complaint:
Follow-up for hypertension. Home BP readings inconsistent (130/80 to 150/95).

Subjective:
Denies headaches, dizziness, chest pain. Adheres to low-sodium diet mostly, but admits occasional fast food. Infrequent exercise. Currently on hydrochlorothiazide 25mg daily.

Objective:
BP 145/90, HR 72. Lungs clear. RRR. No edema.

Assessment:
Uncontrolled hypertension, likely due to inconsistent diet and lack of exercise.

Plan:
1. Reinforce low-sodium diet and encourage regular exercise (30 min moderate activity most days).
2. Increase hydrochlorothiazide to 50mg daily.
3. Follow up in 2 weeks for repeat BP check.
4. Consider adding second agent if BP remains elevated.`
    },
    'Example 4': {
      doctorDictation: `Patient, David Lee, DOB 5/20/1980. Presents today, January 10th, 2024, with cough and sore throat. Symptoms started 3 days ago. Subjective: Cough is dry, occasional. Sore throat is constant, worse with swallowing. Denies fever, body aches, or shortness of breath. No known sick contacts. Working from home. Objective: Vital signs stable. Throat appears mildly erythematous. No exudates. Lungs clear to auscultation. No cervical lymphadenopathy. Assessment: Viral upper respiratory infection. Plan: Symptomatic treatment. Advise gargling with warm salt water for sore throat. Over-the-counter cough suppressants as needed. Increase fluid intake. Self-isolation for 5 days. Return to clinic if symptoms worsen, develop fever, or shortness of breath.`,
      aiGeneratedNote: `Patient: David Lee
DOB: 05/20/1980
Date of Service: January 10, 2024

Chief Complaint:
Cough and sore throat x 3 days.

Subjective:
Dry, occasional cough. Constant sore throat, worse with swallowing. Denies fever, body aches, SOB. No known sick contacts. Working from home.

Objective:
VS stable. Mildly erythematous throat, no exudates. Lungs clear. No cervical lymphadenopathy.

Assessment:
Viral upper respiratory infection.

Plan:
1. Symptomatic treatment.
2. Warm salt water gargles for sore throat.
3. OTC cough suppressants prn.
4. Increase fluid intake.
5. Self-isolation x 5 days.
6. Return to clinic if symptoms worsen, fever, or SOB develop.`
    },
  };


  const renderContent = () => {
    switch (activeSolution) {
      case 'TranscriptX':
        const currentExample = transcriptExamples[activeTranscriptExample];
        return (
          <>
            {showComparison && (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                  Experience TranscriptX - Effortless, Accurate Medical Transcription
                </h3>
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                  {Object.keys(transcriptExamples).map((exampleName) => (
                    <button
                      key={exampleName}
                      onClick={() => {
                        setActiveTranscriptExample(exampleName);
                        setShowComparison(true);
                      }}
                      className={`px-6 py-2 rounded-lg text-lg font-medium transition-colors duration-200
                        ${activeTranscriptExample === exampleName
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                      {exampleName}
                    </button>
                  ))}
                </div>
              </>
            )}


            <div className="flex justify-center mb-8">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {showComparison ? 'Click to collapse comparison' : 'Click to expand comparison'}
              </button>
            </div>

            {showComparison ? (
              <div className="flex flex-col lg:flex-row gap-6">

                <div className="flex-1 bg-[#1A253A] p-6 rounded-lg shadow-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Doctor's Dictation (Audio Input Simulation)</h3>
                    <span className="text-gray-400 text-sm">Audio Input</span>
                  </div>
                  <div className="bg-[#101725] p-4 rounded-md h-96 overflow-y-auto custom-scrollbar text-gray-300 text-sm leading-relaxed">
                    {currentExample.doctorDictation}
                  </div>
                </div>


                <div className="flex-1 bg-[#1A253A] p-6 rounded-lg shadow-lg border border-blue-500/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">TranscriptX - AI-Generated Note</h3>
                    <span className="text-gray-400 text-sm">AI-Generated Output</span>
                  </div>
                  <div className="bg-[#101725] p-4 rounded-md h-96 overflow-y-auto custom-scrollbar text-gray-300 text-sm leading-relaxed">
                    {currentExample.aiGeneratedNote}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 text-xl py-20">
                Comparison collapsed. Click "Click to expand comparison" to view again.
              </div>
            )}
          </>
        );
      case 'Chartwright':
        return (
          <div className="text-center text-gray-400 text-xl py-20">
            Content for Chartwright will go here.
            <br />
            (This would typically show an input for text and an output of a structured chart.)
          </div>
        );
      case 'Redactify':
        return (
          <div className="text-center text-gray-400 text-xl py-20">
            Content for Redactify will go here.
            <br />
            (This would typically show original text and redacted text.)
          </div>
        );
      case 'Validify':
        return (
          <div className="text-center text-gray-400 text-xl py-20">
            Content for Validify will go here.
            <br />
            (This would typically show a document and highlighted compliance issues.)
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A101C] text-white flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto py-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6 text-center">
          See Our Solutions in Action
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 text-center">
          Experience our AI-powered solutions transforming healthcare documentation workflows.
        </p>


        <div className="flex justify-center bg-[#1A253A] rounded-lg p-1 mb-8 shadow-md">
          {['TranscriptX', 'Chartwright', 'Redactify', 'Validify'].map((solution) => (
            <button
              key={solution}
              onClick={() => {
                setActiveSolution(solution);
                setShowComparison(true);
              }}
              className={`flex-1 px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200
                ${activeSolution === solution
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-blue-800'
                }`}
            >
              {solution}
            </button>
          ))}
        </div>


        <div className="bg-[#1A253A] p-6 rounded-lg shadow-xl border border-gray-700">
          {renderContent()}
        </div>
      </div>



    </div>
  );
};

export default Actions;
