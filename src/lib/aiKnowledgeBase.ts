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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

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
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Remember, mental wellness is a journey, not a destination. Professional support can help you navigate challenges and build resilience.`
  },
  {
    category: "Crisis Support",
    keywords: ["suicide", "self-harm", "crisis", "emergency", "help", "urgent", "danger", "harm"],
    response: `If you're experiencing a mental health crisis, immediate help is available.

**Immediate Support:**
- **Emergency Mental Health Helplines**: 8448-8448-45 or 080-46110007
- **National Suicide Prevention Helpline**: 9152987821
- **Emergency Services**: 112 or 100
- **Contact Ms. Rimjhim directly** for urgent support:
  - Phone: +91-6006763586
  - WhatsApp: +91-6006763586
  - Email: kunjcare@gmail.com

**You Are Not Alone:**
Crisis situations can feel overwhelming, but support is available. Reaching out is a sign of strength, not weakness.

**After Crisis:**
Once you're safe, ongoing therapy can help address underlying issues and build coping strategies. Ms. Rimjhim provides compassionate, professional support for crisis situations and long-term recovery.

**Remember:**
Your life has value. There are people who care and want to help. Please reach out—help is available.`
  },
  {
    category: "Anger Management",
    keywords: ["anger", "angry", "rage", "irritated", "frustrated", "temper", "hostile", "aggressive"],
    response: `Anger is a normal emotion, but when it becomes overwhelming or destructive, it can impact your life and relationships.

**Understanding Anger:**
Anger can be triggered by stress, frustration, feeling threatened, or past trauma. Uncontrolled anger can lead to relationship problems, work issues, and health concerns.

**Anger Management Strategies:**
1. **Recognize Triggers**: Identify what situations or thoughts trigger your anger
2. **Take a Timeout**: Step away from the situation to cool down
3. **Deep Breathing**: Use breathing exercises to calm your body
4. **Physical Activity**: Exercise can help release built-up tension
5. **Express Feelings**: Use "I" statements to communicate without blame
6. **Problem-Solving**: Focus on solutions rather than the problem
7. **Relaxation Techniques**: Practice meditation, yoga, or progressive muscle relaxation

**Professional Help:**
Ms. Rimjhim helps individuals understand the root causes of anger and develop healthy coping strategies. Therapy can teach you to express anger constructively and manage emotional responses.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Learning to manage anger is a skill that can be developed with practice and professional support.`
  },
  {
    category: "Grief and Loss",
    keywords: ["grief", "loss", "death", "mourning", "bereavement", "died", "passed away", "funeral", "mourning"],
    response: `Grief is a natural response to loss. Everyone experiences grief differently, and there's no "right" way to grieve.

**Understanding Grief:**
Grief can occur after losing a loved one, a relationship, a job, or any significant change. Common emotions include sadness, anger, guilt, numbness, and confusion.

**Coping with Grief:**
1. **Allow Yourself to Feel**: Don't suppress your emotions—they're valid
2. **Express Your Feelings**: Talk to trusted friends, family, or a therapist
3. **Take Care of Yourself**: Maintain basic self-care (sleep, nutrition, exercise)
4. **Create Rituals**: Honor your loss in meaningful ways
5. **Join Support Groups**: Connect with others who understand your experience
6. **Be Patient**: Grief has no timeline—healing takes time
7. **Seek Professional Help**: Grief counseling can provide support and guidance

**Grief Counseling:**
Ms. Rimjhim provides compassionate grief counseling to help you process loss, navigate difficult emotions, and find ways to honor your loved one while moving forward.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Remember, grief is a journey. You don't have to go through it alone.`
  },
  {
    category: "Work-Life Balance",
    keywords: ["work-life balance", "work stress", "burnout", "overworked", "career stress", "job stress", "workload"],
    response: `Maintaining a healthy work-life balance is essential for mental health and overall well-being.

**Understanding Work-Life Balance:**
Poor work-life balance can lead to burnout, stress, relationship problems, and health issues. It's about finding harmony between professional responsibilities and personal life.

**Strategies for Better Balance:**
1. **Set Boundaries**: Clearly define work hours and stick to them
2. **Learn to Say No**: Don't overcommit yourself
3. **Prioritize Tasks**: Focus on what's most important
4. **Take Breaks**: Regular breaks improve productivity and well-being
5. **Unplug**: Disconnect from work emails and calls after hours
6. **Schedule Personal Time**: Block time for hobbies, family, and self-care
7. **Ask for Help**: Delegate tasks when possible

**Corporate Wellness Programs:**
Ms. Rimjhim offers workshops and programs for organizations on stress management, burnout prevention, and work-life balance. These programs help teams build resilience and create healthier work environments.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

A healthy work-life balance is achievable with the right strategies and support.`
  },
  {
    category: "Social Anxiety",
    keywords: ["social anxiety", "social phobia", "shy", "public speaking", "social situations", "crowds", "meeting people"],
    response: `Social anxiety involves intense fear of social situations and being judged or embarrassed by others.

**Understanding Social Anxiety:**
Social anxiety can make it difficult to meet new people, speak in public, or participate in social activities. Physical symptoms may include blushing, sweating, trembling, or rapid heartbeat.

**Coping Strategies:**
1. **Challenge Negative Thoughts**: Question assumptions about how others perceive you
2. **Start Small**: Gradually expose yourself to social situations
3. **Focus on Others**: Shift attention from yourself to the conversation
4. **Practice Social Skills**: Role-play or practice conversations
5. **Breathing Exercises**: Use deep breathing to manage physical symptoms
6. **Prepare Ahead**: Plan what to say in social situations
7. **Seek Support**: Therapy can help build confidence and skills

**Professional Treatment:**
Ms. Rimjhim uses CBT and exposure therapy to help individuals overcome social anxiety. Treatment focuses on challenging negative beliefs and gradually building social confidence.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Social anxiety is treatable. With the right support, you can build confidence and enjoy social interactions.`
  },
  {
    category: "Mindfulness and Meditation",
    keywords: ["mindfulness", "meditation", "meditate", "present moment", "awareness", "mindful", "breathing exercise"],
    response: `Mindfulness and meditation are powerful tools for managing stress, anxiety, and improving overall mental well-being.

**Understanding Mindfulness:**
Mindfulness is the practice of paying attention to the present moment without judgment. It helps reduce stress, improve focus, and enhance emotional regulation.

**Benefits of Mindfulness:**
- Reduces stress and anxiety
- Improves emotional regulation
- Enhances focus and concentration
- Better sleep quality
- Increased self-awareness
- Improved relationships

**Getting Started:**
1. **Start Small**: Begin with 5-10 minutes daily
2. **Focus on Breath**: Pay attention to your breathing
3. **Use Guided Meditations**: Apps or recordings can help beginners
4. **Practice Daily**: Consistency is more important than duration
5. **Be Patient**: It's normal for your mind to wander
6. **Try Different Techniques**: Find what works for you
7. **Integrate into Daily Life**: Practice mindfulness during routine activities

**Breathing Techniques:**
Ms. Rimjhim teaches various breathing techniques that can be practiced anywhere. Check out the "Wellness Techniques" section on this website for video guides.

**Professional Guidance:**
Ms. Rimjhim incorporates mindfulness and meditation into therapy sessions, teaching clients practical techniques for daily use.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Mindfulness is a skill that develops with practice. Start small and be consistent.`
  },
  {
    category: "Procrastination",
    keywords: ["procrastination", "procrastinate", "putting off", "delaying", "avoiding tasks", "lazy", "unmotivated"],
    response: `Procrastination is the act of delaying or postponing tasks, often despite knowing there will be negative consequences.

**Understanding Procrastination:**
Procrastination is often linked to anxiety, perfectionism, fear of failure, or lack of motivation. It can create stress and impact productivity and self-esteem.

**Overcoming Procrastination:**
1. **Break Tasks Down**: Divide large tasks into smaller, manageable steps
2. **Set Specific Goals**: Clear, concrete goals are easier to achieve
3. **Use the 2-Minute Rule**: If it takes less than 2 minutes, do it now
4. **Eliminate Distractions**: Create a focused work environment
5. **Set Deadlines**: Create artificial deadlines if needed
6. **Reward Yourself**: Celebrate small accomplishments
7. **Address Underlying Issues**: Anxiety or perfectionism may need professional help

**Professional Support:**
Ms. Rimjhim helps individuals understand the psychological factors behind procrastination and develop strategies to overcome it. Therapy can address underlying anxiety, perfectionism, or self-esteem issues.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Procrastination is a habit that can be changed with the right strategies and support.`
  },
  {
    category: "Perfectionism",
    keywords: ["perfectionism", "perfectionist", "perfect", "never good enough", "high standards", "self-critical"],
    response: `Perfectionism involves setting unrealistically high standards and being overly critical of yourself when those standards aren't met.

**Understanding Perfectionism:**
While striving for excellence can be positive, perfectionism can lead to anxiety, depression, procrastination, and burnout. It's often driven by fear of failure or judgment.

**Managing Perfectionism:**
1. **Set Realistic Standards**: Aim for "good enough" rather than perfect
2. **Challenge All-or-Nothing Thinking**: Recognize that most things exist on a spectrum
3. **Practice Self-Compassion**: Treat yourself with kindness and understanding
4. **Accept Mistakes**: View mistakes as learning opportunities
5. **Set Time Limits**: Prevent endless revisions by setting deadlines
6. **Focus on Process**: Value effort and learning over outcomes
7. **Seek Feedback**: Get perspective from others

**Professional Help:**
Ms. Rimjhim helps individuals understand the roots of perfectionism and develop healthier standards. Therapy can address underlying anxiety and self-esteem issues that drive perfectionistic tendencies.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Remember, perfectionism is often a mask for fear. With support, you can learn to set healthy standards and be kinder to yourself.`
  },
  {
    category: "Loneliness",
    keywords: ["lonely", "loneliness", "isolated", "alone", "no friends", "disconnected", "isolated"],
    response: `Loneliness is a feeling of disconnection or isolation, even when surrounded by people. It's a common experience that can impact mental health.

**Understanding Loneliness:**
Loneliness can occur due to life changes, social anxiety, depression, or difficulty forming connections. It's different from being alone—you can feel lonely even in a crowd.

**Coping with Loneliness:**
1. **Reach Out**: Contact friends, family, or acquaintances
2. **Join Groups**: Find communities with shared interests
3. **Volunteer**: Helping others can create meaningful connections
4. **Practice Self-Compassion**: Be kind to yourself during difficult times
5. **Develop Hobbies**: Engage in activities you enjoy
6. **Seek Professional Help**: Therapy can address underlying issues
7. **Be Patient**: Building connections takes time

**Professional Support:**
Ms. Rimjhim helps individuals understand the factors contributing to loneliness and develop skills to build meaningful connections. Therapy can address social anxiety, depression, or other barriers to connection.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Loneliness is a common human experience. With support, you can build the skills and confidence to form meaningful connections.`
  },
  {
    category: "Parenting and Family",
    keywords: ["parenting", "parent", "children", "kids", "family", "raising children", "parental stress"],
    response: `Parenting is one of life's most rewarding yet challenging experiences. It's normal to feel overwhelmed or uncertain at times.

**Common Parenting Challenges:**
- Managing behavior and discipline
- Balancing work and family life
- Dealing with stress and exhaustion
- Communication with children
- Setting boundaries
- Managing your own emotions

**Healthy Parenting Strategies:**
1. **Self-Care**: Take care of your own mental health
2. **Set Clear Boundaries**: Consistent rules help children feel secure
3. **Practice Patience**: Parenting is a learning process
4. **Communicate Openly**: Listen to your children's feelings and concerns
5. **Seek Support**: Connect with other parents or professionals
6. **Manage Stress**: Find healthy ways to cope with parenting stress
7. **Be Kind to Yourself**: No parent is perfect

**Family Therapy:**
Ms. Rimjhim provides support for parents dealing with stress, anxiety, or challenges in raising children. She also offers family therapy to improve communication and relationships within the family.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Remember, seeking help is a sign of strength, not weakness. Professional support can help you become the parent you want to be.`
  },
  {
    category: "Academic Stress",
    keywords: ["exam stress", "academic stress", "studying", "exams", "school stress", "college stress", "test anxiety"],
    response: `Academic stress is common among students and can significantly impact mental health and performance.

**Understanding Academic Stress:**
Academic stress can come from exams, assignments, grades, competition, or pressure from family. It can lead to anxiety, sleep problems, and burnout.

**Managing Academic Stress:**
1. **Time Management**: Create a study schedule and stick to it
2. **Break Tasks Down**: Divide large assignments into smaller parts
3. **Take Regular Breaks**: Rest improves focus and retention
4. **Practice Self-Care**: Maintain sleep, nutrition, and exercise
5. **Study Techniques**: Use active learning methods
6. **Seek Help**: Don't hesitate to ask teachers or tutors for help
7. **Manage Expectations**: Set realistic goals

**Test Anxiety:**
If you experience severe test anxiety, therapy can help. Ms. Rimjhim teaches relaxation techniques and cognitive strategies to manage anxiety during exams.

**Professional Support:**
Ms. Rimjhim helps students manage academic stress, test anxiety, and develop effective study strategies. She also addresses underlying anxiety or perfectionism that may contribute to academic stress.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Academic success is important, but so is your mental health. Don't hesitate to seek support.`
  },
  {
    category: "Coping with Change",
    keywords: ["change", "transition", "life changes", "moving", "new job", "divorce", "breakup", "adjustment"],
    response: `Change is a constant in life, but it can be challenging and stressful, even when the change is positive.

**Understanding Change:**
Major life changes—moving, job changes, relationship changes, loss—can trigger stress, anxiety, and uncertainty. It's normal to feel overwhelmed during transitions.

**Coping with Change:**
1. **Acknowledge Your Feelings**: It's okay to feel uncertain or anxious
2. **Focus on What You Can Control**: Identify aspects you can influence
3. **Maintain Routines**: Keep some consistency in your daily life
4. **Seek Support**: Talk to friends, family, or a therapist
5. **Practice Self-Care**: Prioritize your physical and mental health
6. **Set Small Goals**: Break the transition into manageable steps
7. **Be Patient**: Adjustment takes time

**Professional Support:**
Ms. Rimjhim helps individuals navigate life transitions, manage the stress of change, and develop resilience. Therapy can provide support and strategies during difficult transitions.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Change can be difficult, but it's also an opportunity for growth. With support, you can navigate transitions successfully.`
  },
  {
    category: "OCD",
    keywords: ["ocd", "obsessive", "compulsive", "obsessions", "compulsions", "repetitive thoughts", "rituals"],
    response: `Obsessive-Compulsive Disorder (OCD) involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors (compulsions) performed to reduce anxiety.

**Understanding OCD:**
OCD can significantly impact daily life. Common obsessions include fears of contamination, harm, or making mistakes. Compulsions are repetitive behaviors or mental acts performed to reduce anxiety.

**Treatment for OCD:**
1. **Cognitive Behavioral Therapy (CBT)**: Specifically Exposure and Response Prevention (ERP)
2. **Medication**: May be recommended in combination with therapy
3. **Understanding Triggers**: Learning to identify what triggers obsessions
4. **Gradual Exposure**: Facing fears in a controlled way
5. **Response Prevention**: Resisting compulsive behaviors
6. **Support Groups**: Connecting with others who understand

**Professional Treatment:**
Ms. Rimjhim provides evidence-based treatment for OCD, including ERP therapy. Treatment focuses on gradually facing fears and reducing compulsive behaviors.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

OCD is highly treatable with the right therapy. Don't hesitate to seek professional help.`
  },
  {
    category: "Phobias",
    keywords: ["phobia", "fear", "afraid", "scared", "fear of", "panic", "avoidance"],
    response: `A phobia is an intense, irrational fear of a specific object, situation, or activity that leads to avoidance.

**Understanding Phobias:**
Common phobias include fear of heights, flying, spiders, enclosed spaces, or social situations. Phobias can significantly limit daily activities and cause distress.

**Treatment for Phobias:**
1. **Exposure Therapy**: Gradually facing the feared object or situation
2. **Cognitive Techniques**: Challenging irrational thoughts about the fear
3. **Relaxation Techniques**: Learning to manage anxiety responses
4. **Systematic Desensitization**: Gradual exposure combined with relaxation
5. **Support**: Having someone supportive during exposure exercises

**Professional Treatment:**
Ms. Rimjhim uses evidence-based exposure therapy to help individuals overcome phobias. Treatment is gradual and tailored to your specific needs and comfort level.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Phobias are highly treatable. With professional support, you can overcome your fears and regain freedom in your life.`
  },
  {
    category: "First Therapy Session",
    keywords: ["first session", "first therapy", "what to expect", "therapy appointment", "first visit", "initial consultation"],
    response: `Starting therapy can feel intimidating, but knowing what to expect can help ease anxiety.

**What to Expect in Your First Session:**
1. **Paperwork**: You'll complete intake forms about your background and concerns
2. **Assessment**: The therapist will ask about your current challenges, history, and goals
3. **Building Rapport**: You'll get to know each other and establish trust
4. **Setting Goals**: Discuss what you hope to achieve in therapy
5. **Questions Welcome**: Feel free to ask about the therapist's approach, experience, or process
6. **Confidentiality**: Your therapist will explain confidentiality and its limits
7. **Next Steps**: Discuss frequency of sessions and treatment plan

**How to Prepare:**
- Think about what you'd like to work on
- Write down any questions you have
- Be honest and open
- Remember, it's okay to feel nervous

**What to Bring:**
- Insurance information (if applicable)
- List of medications
- Any relevant medical or mental health history

**Getting Started:**
To book your first session with Ms. Rimjhim:
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Remember, the first session is about getting to know each other and determining if it's a good fit. It's normal to feel nervous—most people do!`
  },
  {
    category: "Online Therapy",
    keywords: ["online therapy", "teletherapy", "video therapy", "remote therapy", "virtual therapy", "online counseling"],
    response: `Online therapy (teletherapy) provides mental health services through video calls, making therapy more accessible and convenient.

**Benefits of Online Therapy:**
- Convenience: Access therapy from your home
- Flexibility: Easier to fit into your schedule
- Accessibility: Available for those with mobility issues or in remote areas
- Comfort: Some people feel more comfortable in their own space
- Continuity: Continue therapy even when traveling

**What to Expect:**
- Sessions are conducted via secure video platform
- Same confidentiality and professionalism as in-person therapy
- Duration is typically 50-60 minutes
- You'll need a private, quiet space and reliable internet

**Is Online Therapy Effective?**
Research shows online therapy can be as effective as in-person therapy for many conditions, including anxiety, depression, and stress management.

**Getting Started:**
Ms. Rimjhim offers online therapy sessions. To learn more or book a session:
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Online therapy makes professional mental health support more accessible. If you have questions about whether it's right for you, feel free to reach out.`
  },
  {
    category: "Mental Health Stigma",
    keywords: ["stigma", "embarrassed", "ashamed", "judgment", "mental illness", "seeking help", "therapy shame"],
    response: `Mental health stigma is a significant barrier to seeking help, but it's important to remember that mental health is just as important as physical health.

**Understanding Stigma:**
Stigma involves negative attitudes, beliefs, or discrimination toward people with mental health conditions. It can prevent people from seeking help and lead to shame and isolation.

**Challenging Stigma:**
1. **Education**: Learn about mental health and share accurate information
2. **Talk Openly**: Sharing your experiences can help normalize mental health
3. **Be Compassionate**: Show empathy toward yourself and others
4. **Seek Support**: Connect with others who understand
5. **Focus on Facts**: Mental health conditions are medical conditions, not character flaws
6. **Advocate**: Support mental health awareness and resources

**Remember:**
- Seeking help is a sign of strength, not weakness
- Mental health conditions are common and treatable
- You deserve support and care
- Therapy is a tool for growth and healing

**Getting Help:**
If stigma is preventing you from seeking help, know that Ms. Rimjhim provides a safe, non-judgmental space. Your mental health matters.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

You don't have to face mental health challenges alone. Professional support is available and seeking it is a courageous step.`
  },
  {
    category: "Breathing Techniques",
    keywords: ["breathing", "breath", "breathing exercise", "deep breathing", "breathwork", "calm breathing"],
    response: `Breathing techniques are powerful tools for managing stress, anxiety, and promoting relaxation. They can be practiced anywhere, anytime.

**Benefits of Breathing Exercises:**
- Reduces stress and anxiety
- Lowers blood pressure
- Improves focus and concentration
- Promotes relaxation
- Helps with sleep
- Manages panic attacks

**Popular Breathing Techniques:**

1. **4-7-8 Breathing:**
   - Inhale through nose for 4 counts
   - Hold breath for 7 counts
   - Exhale through mouth for 8 counts
   - Repeat 4-8 times

2. **Box Breathing:**
   - Inhale for 4 counts
   - Hold for 4 counts
   - Exhale for 4 counts
   - Hold for 4 counts
   - Repeat

3. **Diaphragmatic Breathing:**
   - Place hand on belly
   - Inhale deeply, feeling belly rise
   - Exhale slowly, feeling belly fall
   - Focus on slow, deep breaths

**Video Resources:**
Check out the "Wellness Techniques" section on this website for video guides on breathing techniques that you can practice along with.

**Professional Guidance:**
Ms. Rimjhim teaches various breathing techniques in therapy sessions and can help you find what works best for you.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Practice breathing exercises regularly for best results. They're most effective when used consistently.`
  },
  {
    category: "Couples Therapy",
    keywords: ["couples therapy", "marriage counseling", "relationship therapy", "couple", "marriage", "partner therapy"],
    response: `Couples therapy helps partners improve communication, resolve conflicts, and strengthen their relationship.

**When Couples Therapy Can Help:**
- Communication difficulties
- Frequent conflicts or arguments
- Trust issues or infidelity
- Intimacy problems
- Life transitions (marriage, children, retirement)
- Growing apart
- Financial stress
- Parenting disagreements

**What to Expect:**
- Both partners attend sessions together
- Therapist helps identify patterns and issues
- Focus on communication and problem-solving skills
- Safe space to express feelings and concerns
- Collaborative goal-setting
- Homework assignments to practice skills

**Benefits:**
- Improved communication
- Better conflict resolution
- Increased intimacy and connection
- Stronger emotional bond
- Tools for ongoing relationship maintenance

**Getting Started:**
Ms. Rimjhim provides couples therapy to help partners build healthier, more fulfilling relationships. To learn more or book a session:
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Couples therapy can help you and your partner build a stronger, more connected relationship.`
  },
  {
    category: "Eating Disorders",
    keywords: ["eating disorder", "anorexia", "bulimia", "binge eating", "body image", "disordered eating", "food"],
    response: `Eating disorders are serious mental health conditions that require professional treatment. Recovery is possible with the right support.

**Types of Eating Disorders:**
- Anorexia Nervosa: Restrictive eating and fear of weight gain
- Bulimia Nervosa: Binge eating followed by purging behaviors
- Binge Eating Disorder: Recurrent episodes of overeating
- Other Specified Feeding or Eating Disorders (OSFED)

**Warning Signs:**
- Extreme weight changes
- Preoccupation with food, weight, or body image
- Avoidance of meals or social eating
- Excessive exercise
- Mood changes or withdrawal
- Physical health problems

**Treatment:**
Eating disorders require comprehensive treatment, often including:
- Individual therapy (CBT, DBT)
- Medical monitoring
- Nutritional counseling
- Family therapy (when appropriate)
- Support groups

**Professional Help:**
Ms. Rimjhim provides therapy for eating disorders, addressing underlying emotional issues and developing healthy relationships with food and body image.

**Important:**
If you're struggling with an eating disorder, please seek professional help. Early intervention improves outcomes.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

Recovery from eating disorders is possible. You don't have to face this alone.`
  }
];

// Default response for unmatched queries
export const defaultResponse = `Thank you for your question. I'm here to help with general mental health and wellness information.

**What I Can Help With:**
- Anxiety and stress management
- Depression and mood concerns
- Therapy information and what to expect
- Self-esteem and confidence building
- Trauma and PTSD
- Sleep issues and insomnia
- Relationship challenges and couples therapy
- Anger management
- Grief and loss counseling
- Work-life balance and burnout
- Social anxiety
- Mindfulness and meditation
- Procrastination
- Perfectionism
- Loneliness and isolation
- Parenting and family issues
- Academic stress and test anxiety
- Coping with life changes
- OCD (Obsessive-Compulsive Disorder)
- Phobias and fears
- Online therapy information
- Mental health stigma
- Breathing techniques
- Eating disorders
- General wellness and self-care

**Important Note:**
I provide general information only and cannot replace professional medical or mental health advice. For personalized assessment and treatment, please consult with Ms. Rimjhim directly.

**Contact Information:**
- Email: kunjcare@gmail.com
- Phone: +91-6006763586
- WhatsApp: +91-6006763586

**Emergency Support:**
If you're in crisis, please contact:
- Emergency Mental Health Helplines: 8448-8448-45 or 080-46110007
- National Suicide Prevention Helpline: 9152987821

**Getting Professional Help:**
Ms. Rimjhim is a Licensed Clinical Psychologist (RCI) specializing in:
- Individual psychotherapy (CBT, DBT, ACT)
- Couples and family therapy
- Psychological assessments
- Trauma-informed care
- Anxiety and depression treatment
- Stress management and corporate wellness programs

Would you like to know more about any specific topic? Feel free to ask about any mental health concern, and I'll do my best to provide helpful information.`;

// Function to find the best matching response
export function findBestResponse(userInput: string): string {
  const lowerInput = userInput.toLowerCase().trim();
  
  // If input is too short, return default
  if (lowerInput.length < 2) {
    return defaultResponse;
  }
  
  // Score each knowledge base entry
  const scores = knowledgeBase.map(entry => {
    let score = 0;
    
    // Check for keyword matches (exact matches get higher weight)
    entry.keywords.forEach(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      // Exact word match (higher weight)
      const wordRegex = new RegExp(`\\b${lowerKeyword}\\b`, 'i');
      if (wordRegex.test(lowerInput)) {
        score += 3; // Higher weight for exact word matches
      }
      // Partial match (lower weight)
      else if (lowerInput.includes(lowerKeyword)) {
        score += 1;
      }
    });
    
    // Bonus for multiple keyword matches
    const matchedKeywords = entry.keywords.filter(keyword => 
      lowerInput.includes(keyword.toLowerCase())
    ).length;
    if (matchedKeywords > 1) {
      score += matchedKeywords; // Bonus for multiple matches
    }
    
    return {
      entry,
      score: score
    };
  });
  
  // Sort by score (highest first)
  scores.sort((a, b) => b.score - a.score);
  
  // Find the entry with the highest score
  const bestMatch = scores[0];
  
  // Return response if score is significant (at least 2 points), otherwise return default
  if (bestMatch && bestMatch.score >= 2) {
    return bestMatch.entry.response;
  }
  
  // If no good match, check for common greetings or questions
  const greetings = ['hello', 'hi', 'hey', 'help', 'information', 'tell me', 'what', 'how', 'why'];
  const hasGreeting = greetings.some(greeting => lowerInput.includes(greeting));
  
  if (hasGreeting && lowerInput.length < 20) {
    return defaultResponse;
  }
  
  // For longer queries without matches, still return default but with context
  return defaultResponse;
}

