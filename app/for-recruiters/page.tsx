import BackButton from "@/components/BackButton";

export default function ForRecruiters() {
  return (
    <main className="flex-1 px-6">
      <div className="max-w-6xl mx-auto w-full py-12">

        <BackButton />

        {/* ===== OPENING ===== */}
        <h2 className="text-3xl font-semibold text-foreground mb-8">
          What to expect from this page?
        </h2>

        <p className="font-mono text-muted-foreground leading-relaxed text-justify mb-10 max-w-3xl">
          Hi, before you begin understanding me, here&apos;s what to expect from this page. <br/>
          This page is not built to tell you about my hobbies, my achievements or to justify myself as 
          a person. <br/> <br/>

          The motive here is simple, the following content just wants to make it easier for 
          you to evaluate "is this guy worth giving a chance?" by answering questions like "will he be a 
          good fit for the role and team?", "will he be able to understand our company's vision and 
          mission?", "does his mindset align with our work ethic?" etc. <br/> <br/>

          More importantly, it aims to give you an insight into what I bring to the table 
          besides my technical abilities.
        </p>

        <h2 className="text-3xl font-semibold text-foreground mb-8">
          How is the above expectation fulfilled?
        </h2>

        <p className="font-mono text-muted-foreground leading-relaxed text-justify mb-12 max-w-3xl">
          The page answers a different set of questions instead, chosen specifically to help you evaluate 
          the ones above without me answering them directly. The reason is that it feels 
          vague to simply say "I will work hard for the company" since it's easy to say a sentence like 
          that with no way of actually verifying the intent behind it. <br/> <br/>
          
          Therefore, instead of answering those questions directly, I have answered another 
          set of questions specifically chosen to make it easier for you to evaluate whether my words and 
          intent feel genuine and to infer the answer to the above questions in your own way.  <br/> <br/>

          I chose this approach and the questions below because I felt they will communicate what I 
          want to the best. There's no way to say if this was the right call.  Moreover, different 
          individuals have different ways of viewing things so defining a clear method that will convince 
          everyone is a non-trivial task. Therefore, After reading this webpage, it's up to you to decide 
          that "is this a person who will live up to his words?" or "is he just all talk?".
        </p>

        {/* ===== SECTION 1: WHO I AM, WHAT I EXPECT BACK ===== */}
        {/* Placeholder: identity through behavior, 2-4 real examples */}
        {/* Placeholder: what I am looking for in a company */}
        {/* Placeholder: strengths/weaknesses, situation handled, 5-year outlook, why this role */}

        <h2 className="text-3xl font-semibold text-foreground mb-8">
          What's something you're still working on about yourself?
        </h2>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          I have learned to <span className="text-foreground font-medium">accept failure</span> fairly easily.
          What I still struggle with is the frustration that follows a mistake I did not have to make. Losing to
          a stronger player in chess never bothers me. <span className="text-foreground font-medium">Blundering
          away a winning position does.</span>
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          When I started playing, a blunder like that would send me into a <span className="text-foreground font-medium">
          tilt spiral</span>, playing game after game out of rage instead of judgment, and losing most of them.
          It is a specific kind of frustration, spending half an hour calculating a winning line, only to hang a
          piece in one careless move.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          What has changed is the pause before I react. I have learned to <span className="text-foreground font-medium">
          stop, breathe, and actually assess</span> whether the game is still winnable, rather than playing on out
          of pride. If it is not, resigning and starting fresh beats burning another hour on a lost cause.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-12 max-w-3xl">
          What I have not fully solved is the quieter part. I no longer carry one loss into the next game, but
          some part of me is still annoyed at myself for the mistake itself. <span className="text-foreground font-medium">
          The fix, I think, is to stop assigning blame entirely</span>, not to the situation, not to circumstance,
          not to myself. Just accept what happened and move forward.
        </p>



        <h2 className="text-3xl font-semibold text-foreground mb-8">
          What's a strength you didn't earn easily?
        </h2>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          I was running to catch a bus to a lecture on campus. I made it. Three stops in, the driver pulled over,
          it turned out he was on the wrong route, and we had to wait for the correct driver to arrive. Another
          bus on my route drove straight past us while we waited.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          What stuck with me was not the delay. It was <span className="text-foreground font-medium">what my mind
          did in the seconds before I ran for that first bus</span>. If I don't catch this bus, I'm late. If I'm
          late, I miss the lecture. If I miss the lecture, I fall behind on the module. If I fall behind, I do
          worse in the exam. If I do worse in the exam, my degree suffers. The chain kept going, all the way to
          imagining a worse career because of one bus.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          None of that was a real assessment of the situation. It was fear wearing the costume of planning.
          <span className="text-foreground font-medium"> I was making a decision to avoid an imagined outcome
          ten steps down the line, not responding to what was actually in front of me.</span>
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-12 max-w-3xl">
          Since then, when I catch myself spiraling down a chain like that, I ask one question: so what if it
          happens? Not to stop caring about the outcome, but to separate <span className="text-foreground font-medium">
          what I can actually act on right now from what my mind has already decided to fear</span>. It has not
          made me fearless. It has made my decisions better.
        </p>



        <h2 className="text-3xl font-semibold text-foreground mb-8">
          Tell me about a time something didn't go the way you planned.
        </h2>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          The ECG Signal Classification Challenge required sorting heartbeat readings into three categories. At
          first it looked like a standard machine learning problem, preprocess the signal, train a model. After
          doing exactly that, I was at my wit's end. <span className="text-foreground font-medium">Nothing I
          changed was moving the needle.</span>
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          I understood early on that simply training a more complex model would not fix this. So I stepped back
          and asked a more basic question: how does a model actually tell one class apart from another? It needs
          features that genuinely separate them, and I did not have any that did.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          The real gap was not in the model, it was in the data I was feeding it. So I stopped iterating on the
          model and <span className="text-foreground font-medium">went looking outside machine learning entirely</span>,
          reading about how doctors actually read an ECG signal, and academic papers that had tackled similar
          classification problems on other datasets.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          Most of it did not directly apply. But I found something usable, the characteristics of specific signal
          peaks doctors use to judge whether a heartbeat is healthy. I extracted those peaks from the raw signal
          and compared them against rough benchmark values I had found. The estimates were imperfect, but they
          gave the model genuinely new patterns to work with.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-12 max-w-3xl">
          That decision to step outside the standard workflow is what turned the project around. I placed
          <span className="text-foreground font-medium"> 2nd in the ECG classification challenge at UoN</span>.
        </p>



        <h2 className="text-3xl font-semibold text-foreground mb-8">
          What do you actually want out of a job right now?
        </h2>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          What I want in three words: <span className="text-foreground font-medium">meaningful, challenging work</span>.
          At this stage in my career, income, benefits, and leave count are not my priority. What I am chasing is
          learning, growth, and trajectory, and the work I do matters more to me than the job title on it. I am
          young, and I believe prioritizing that now, while I can afford to, will take me far later. Whether the
          company is an early-stage startup or an established, stable workplace, my priority stays the same: I
          want to <span className="text-foreground font-medium">make real impact from day one</span>.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          I am ambitious, but I am not naive about how work actually goes. There will be short stretches,
          onboarding, a quiet season, a gap between projects, where I will not be contributing at full capacity.
          That is fine, as long as it stays temporary and does not become the norm.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-12 max-w-3xl">
          Nothing is permanent, and one day my path and this company's will diverge. What I can offer is how I
          handle that day when it comes: <span className="text-foreground font-medium">I will leave the way I
          worked</span>, professionally, having finished what I owed, and grateful for the trust I was given
          to try.
        </p>



        <h2 className="text-3xl font-semibold text-foreground mb-8">
          Where do you see this going, for you, in the next 5 years?
        </h2>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          In five years, I want to be the person a team hands an ambiguous, complex, unsolved problem to, not
          because I have all the answers, but because I have a track record of finding them. Right now I am
          building that track record project by project. In five years, I want it built through
          <span className="text-foreground font-medium"> real production systems, at scale, with real
          consequences attached to getting it wrong</span>.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          Concretely, that means growing from someone who builds and evaluates models into someone who
          <span className="text-foreground font-medium"> owns the backend these systems run on</span>, latency,
          failure modes, monitoring, the parts that do not show up in a notebook. I am already leaning that way,
          most of my projects end in a deployed API, not a metric on a slide.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-4 max-w-3xl">
          I also intend to keep sharpening the fundamentals underneath all of this. Solving any serious problem
          takes real problem-solving, critical thinking, and pattern recognition, and I believe competitive coding
          is one of the sharpest ways to build those. <span className="text-foreground font-medium">That is why I
          am working toward 5-star status on CodeChef</span>, not because interviews ask for it, but because that
          level of fluency is what it actually takes to solve complex, unseen problems under real-life constraints
          like optimization and limited time.
        </p>

        <p className="text-muted-foreground text-lg text-justify leading-relaxed mb-12 max-w-3xl">
          None of this is a fixed script. But the direction will not change:
          <span className="text-foreground font-medium"> more ownership, harder problems, and systems that matter
          once they are live,</span> not just once they are trained.
        </p>

        {/* ===== CLOSING ===== */}
        {/* Placeholder: calm CTA to Contact or Resume */}

        <p className="text-lg text-justify text-muted-foreground mb-4 max-w-3xl">
          <span className="underline text-foreground">Note:</span> Curious about my formal qualifications, 
          achievements, what I do outside my work, or the type of roles I am targeting? <br/> 
        </p>

        <p className="text-lg text-justify text-muted-foreground mb-10">
          Find that on the{" "}
          <a href="/about" className="text-foreground hover:opacity-80 transition-opacity">
            About
          </a>{" "}
          page.
        </p>

        <div className="border-t border-foreground pt-10 max-w-36l">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Think I will be a good fit for your company?
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            If this gave you what you needed to make that call, then
          </p>
          <a href="/contact" className="font-sans text-2xl text-foreground hover:opacity-80 transition-opacity">
            here's how to reach me →
          </a>
        </div>

      </div>
    </main>
  );
}