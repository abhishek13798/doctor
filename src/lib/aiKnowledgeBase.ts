// AI Knowledge Base - Comprehensive responses for common mental health questions
// This provides intelligent fallback responses when OpenAI API is not available

export interface KnowledgeResponse {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeResponse[] = [
  {
    category: "Anxiety",
    keywords: ["anxiety", "anxious", "worry", "panic", "nervous", "stress", "overwhelmed", "fear"],
    response: `Anxiety is a common mental health concern that many people experience. Here are some helpful strategies:

**Understanding Anxiety:**
Anxiety is your body's natural response to stress. It can manifest as excessive worry, physical symptoms (rapid heartbeat, sweating), or avoidance behaviors.

**Coping Strategies:**
1. **Deep Breathing**: Practice 4-7-8 breathing (inhale 4 counts, hold 7, exhale 8)
2. **Grounding Techniques**: Use the 5-4-3-2-1 method (5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste)
3. **Progressive Muscle Relaxation**: Tense and release muscle groups
4. **Mindfulness**: Practice staying present in the moment
5. **Regular Exercise**: Physical activity helps reduce anxiety
6. **Limit Caffeine**: Can increase anxiety symptoms
7. **Sleep Hygiene**: Ensure 7-9 hours of quality sleep

**When to Seek Help:**
If anxiety interferes with daily life, relationships, or work, it's important to consult with a professional. Ms. Rimjhim specializes in anxiety management using evidence-based therapies like CBT and DBT.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Remember, this is general information. For personalized treatment, please consult with Ms. Rimjhim directly.`
  },
  {
    category: "Depression",
    keywords: ["depression", "depressed", "sad", "hopeless", "down", "unmotivated", "empty", "worthless"],
    response: `Depression is more than just feeling sad—it's a serious mental health condition that affects how you think, feel, and function.

**Understanding Depression:**
Depression can cause persistent sadness, loss of interest in activities, changes in sleep or appetite, difficulty concentrating, and feelings of hopelessness.

**Self-Care Strategies:**
1. **Routine**: Maintain a daily schedule, even when you don't feel like it
2. **Physical Activity**: Even light exercise can boost mood
3. **Social Connection**: Reach out to trusted friends or family
4. **Sunlight**: Spend time outdoors or near windows
5. **Healthy Eating**: Balanced nutrition supports mental health
6. **Sleep Schedule**: Maintain consistent sleep-wake times
7. **Small Goals**: Break tasks into manageable steps

**Professional Support:**
Depression is highly treatable with therapy. Ms. Rimjhim uses evidence-based approaches like CBT and ACT to help individuals recover and build resilience.

**Important:**
If you're experiencing thoughts of self-harm or suicide, please seek immediate help:
- National Suicide Prevention Helpline: 9152987821
- Contact Ms. Rimjhim directly for urgent support

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

This is general information. Professional assessment and treatment are essential for depression.`
  },
  {
    category: "Stress Management",
    keywords: ["stress", "stressed", "pressure", "burnout", "overwhelmed", "tension", "pressure"],
    response: `Stress is a natural response to challenges, but chronic stress can impact your physical and mental health.

**Understanding Stress:**
Stress activates your body's fight-or-flight response. While some stress is normal, chronic stress can lead to health problems.

**Effective Stress Management:**
1. **Time Management**: Prioritize tasks and learn to say no
2. **Relaxation Techniques**: Meditation, yoga, or deep breathing
3. **Physical Activity**: Regular exercise reduces stress hormones
4. **Healthy Boundaries**: Set limits on work and commitments
5. **Social Support**: Talk to friends, family, or support groups
6. **Hobbies**: Engage in activities you enjoy
7. **Professional Help**: Therapy can teach coping strategies

**Workplace Stress:**
Ms. Rimjhim offers corporate workshops on stress management, burnout prevention, and work-life balance. These programs help teams build resilience and create healthier work environments.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

For personalized stress management strategies, consider booking a session with Ms. Rimjhim.`
  },
  {
    category: "Therapy Information",
    keywords: ["therapy", "counseling", "psychotherapy", "treatment", "session", "therapist", "counselor"],
    response: `Therapy is a collaborative process where you work with a trained professional to understand and address mental health concerns.

**Types of Therapy Offered:**
Ms. Rimjhim uses evidence-based approaches:
- **CBT (Cognitive Behavioral Therapy)**: Identifies and changes negative thought patterns
- **DBT (Dialectical Behavior Therapy)**: Focuses on emotional regulation and interpersonal skills
- **ACT (Acceptance and Commitment Therapy)**: Promotes psychological flexibility and values-based living

**What to Expect:**
- Initial assessment to understand your needs
- Personalized treatment plan
- Regular sessions (typically 50-60 minutes)
- Safe, confidential, non-judgmental environment
- Collaborative goal-setting

**Benefits of Therapy:**
- Better understanding of yourself
- Improved coping skills
- Enhanced emotional regulation
- Better relationships
- Increased self-esteem
- Reduced symptoms of mental health conditions

**Getting Started:**
To book a session or learn more, contact Ms. Rimjhim:
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Therapy is a journey of growth and healing. Taking the first step is often the hardest part.`
  },
  {
    category: "Self-Esteem",
    keywords: ["self-esteem", "confidence", "self-worth", "self-doubt", "insecure", "self-image", "self-love"],
    response: `Self-esteem is how you view and value yourself. Building healthy self-esteem is a journey that takes time and practice.

**Understanding Self-Esteem:**
Low self-esteem can affect relationships, career, and overall well-being. It often stems from negative self-talk and past experiences.

**Building Self-Esteem:**
1. **Challenge Negative Thoughts**: Question self-critical beliefs
2. **Practice Self-Compassion**: Treat yourself as you would a friend
3. **Set Realistic Goals**: Achieve small wins to build confidence
4. **Celebrate Strengths**: Acknowledge your positive qualities
5. **Limit Comparisons**: Focus on your own journey
6. **Surround Yourself with Support**: Spend time with positive people
7. **Practice Self-Care**: Prioritize your physical and mental health

**Professional Support:**
Ms. Rimjhim specializes in helping individuals build self-esteem and confidence through therapy. She uses evidence-based techniques to address underlying issues and develop a healthier self-image.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Remember, building self-esteem is a process. Professional support can accelerate your journey.`
  },
  {
    category: "Trauma",
    keywords: ["trauma", "traumatic", "ptsd", "abuse", "violence", "accident", "traumatic experience"],
    response: `Trauma is an emotional response to a distressing event. Healing from trauma is possible with the right support.

**Understanding Trauma:**
Trauma can result from various experiences including accidents, abuse, loss, or witnessing violence. Symptoms may include flashbacks, avoidance, hypervigilance, or emotional numbness.

**Healing from Trauma:**
1. **Safety First**: Ensure you're in a safe environment
2. **Professional Support**: Trauma therapy is essential for recovery
3. **Self-Care**: Prioritize physical and emotional well-being
4. **Grounding Techniques**: Stay connected to the present moment
5. **Support Network**: Connect with trusted friends or support groups
6. **Patience**: Healing takes time—be gentle with yourself

**Trauma-Informed Therapy:**
Ms. Rimjhim provides trauma-informed care using evidence-based approaches. She creates a safe, supportive environment for processing traumatic experiences and building resilience.

**Important:**
If you're in immediate danger, contact emergency services. For trauma support, reach out to Ms. Rimjhim:
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Trauma recovery is possible. You don't have to go through it alone.`
  },
  {
    category: "Sleep",
    keywords: ["sleep", "insomnia", "sleepless", "tired", "exhausted", "rest", "sleeping problems"],
    response: `Quality sleep is essential for mental and physical health. Sleep problems can significantly impact your well-being.

**Understanding Sleep Issues:**
Sleep problems can be caused by stress, anxiety, depression, or poor sleep hygiene. They can create a cycle that affects your mental health.

**Improving Sleep:**
1. **Sleep Schedule**: Go to bed and wake up at the same time daily
2. **Bedroom Environment**: Keep it cool, dark, and quiet
3. **Limit Screens**: Avoid devices 1 hour before bed
4. **Relaxation Routine**: Develop a calming pre-sleep ritual
5. **Limit Caffeine**: Avoid caffeine after 2 PM
6. **Exercise**: Regular physical activity improves sleep (but not too close to bedtime)
7. **Avoid Large Meals**: Don't eat heavy meals before bed

**When Sleep Affects Mental Health:**
If sleep problems persist or are related to anxiety or depression, therapy can help. Ms. Rimjhim addresses sleep issues as part of comprehensive mental health treatment.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

For persistent sleep issues, consider consulting with Ms. Rimjhim.`
  },
  {
    category: "Relationships",
    keywords: ["relationship", "relationships", "communication", "conflict", "partner", "marriage", "family", "friends"],
    response: `Healthy relationships are fundamental to well-being. Relationship issues can significantly impact mental health.

**Common Relationship Challenges:**
- Communication difficulties
- Conflict resolution
- Trust issues
- Boundaries
- Emotional intimacy

**Improving Relationships:**
1. **Active Listening**: Truly hear what the other person is saying
2. **Express Needs Clearly**: Use "I" statements to communicate feelings
3. **Set Boundaries**: Know your limits and communicate them
4. **Practice Empathy**: Try to understand the other person's perspective
5. **Quality Time**: Make time for meaningful connection
6. **Seek Compromise**: Find solutions that work for both parties
7. **Professional Help**: Couples or individual therapy can help

**Relationship Therapy:**
Ms. Rimjhim helps individuals and couples improve communication, resolve conflicts, and build healthier relationships. She addresses underlying patterns that affect relationship dynamics.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Healthy relationships require effort and sometimes professional support.`
  },
  {
    category: "General Wellness",
    keywords: ["wellness", "wellbeing", "mental health", "self-care", "healthy", "happiness", "balance"],
    response: `Mental wellness is about maintaining a healthy balance in all aspects of life—emotional, physical, and social.

**Pillars of Mental Wellness:**
1. **Physical Health**: Regular exercise, balanced nutrition, adequate sleep
2. **Emotional Health**: Understanding and managing emotions
3. **Social Connection**: Meaningful relationships and community
4. **Purpose**: Activities and goals that give life meaning
5. **Stress Management**: Effective coping strategies
6. **Self-Care**: Regular practices that nurture your well-being

**Daily Wellness Practices:**
- Morning routine that sets a positive tone
- Regular physical activity
- Mindfulness or meditation
- Time for hobbies and interests
- Social connection
- Adequate rest and relaxation

**Professional Support:**
Ms. Rimjhim helps individuals develop personalized wellness plans that address their unique needs and goals. Therapy can enhance your overall well-being and quality of life.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

Remember, mental wellness is a journey, not a destination. Professional support can help you navigate challenges and build resilience.`
  },
  {
    category: "Crisis Support",
    keywords: ["suicide", "self-harm", "crisis", "emergency", "help", "urgent", "danger", "harm"],
    response: `If you're experiencing a mental health crisis, immediate help is available.

**Immediate Support:**
- **National Suicide Prevention Helpline**: 9152987821
- **Emergency Services**: 112 or 100
- **Contact Ms. Rimjhim directly** for urgent support:
  - Phone: +91-9103034279
  - WhatsApp: +91-9103034279
  - Email: kunjcare@gmail.com

**You Are Not Alone:**
Crisis situations can feel overwhelming, but support is available. Reaching out is a sign of strength, not weakness.

**After Crisis:**
Once you're safe, ongoing therapy can help address underlying issues and build coping strategies. Ms. Rimjhim provides compassionate, professional support for crisis situations and long-term recovery.

**Remember:**
Your life has value. There are people who care and want to help. Please reach out—help is available.`
  }
];

// Default response for unmatched queries
export const defaultResponse = `Thank you for your question. I'm here to help with general mental health and wellness information.

**What I Can Help With:**
- Anxiety and stress management
- Depression and mood concerns
- Therapy information
- Self-esteem and confidence
- Trauma and PTSD
- Sleep issues
- Relationship challenges
- General wellness and self-care

**Important Note:**
I provide general information only and cannot replace professional medical or mental health advice. For personalized assessment and treatment, please consult with Ms. Rimjhim directly.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-9103034279
- WhatsApp: +91-9103034279

**Getting Professional Help:**
Ms. Rimjhim is a Licensed Clinical Psychologist (RCI) specializing in:
- Individual psychotherapy (CBT, DBT, ACT)
- Psychological assessments
- Trauma-informed care
- Anxiety and depression treatment
- Stress management

Would you like to know more about any specific topic? Feel free to ask about anxiety, depression, therapy, stress management, or any other mental health concern.`;

// Function to find the best matching response
export function findBestResponse(userInput: string): string {
  const lowerInput = userInput.toLowerCase();
  
  // Score each knowledge base entry
  const scores = knowledgeBase.map(entry => {
    const keywordMatches = entry.keywords.filter(keyword => 
      lowerInput.includes(keyword.toLowerCase())
    ).length;
    
    return {
      entry,
      score: keywordMatches
    };
  });
  
  // Find the entry with the highest score
  const bestMatch = scores.reduce((best, current) => 
    current.score > best.score ? current : best,
    scores[0]
  );
  
  // Return response if score is significant, otherwise return default
  if (bestMatch.score > 0) {
    return bestMatch.entry.response;
  }
  
  return defaultResponse;
}

