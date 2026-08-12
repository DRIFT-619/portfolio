"use client";

import { useState } from "react";

export default function ApproachSection() {
  const [expanded, setExpanded] = useState(false);

  const steps = [
    { title: "Understanding what is actually being asked", example: "Knowing the real business question behind a metric before picking a model." },
    { title: "Defining what needs to be done", example: "Clarifying whether the goal is improving accuracy, reducing latency, or something else entirely." },
    { title: "Understanding the problem from first principles", example: "Reading relevant articles, papers, or documentation before assuming an approach." },
    { title: "Sketching a rough idea of the solution", example: "Identifying the underlying pattern behind the problem." },
    { title: "Establishing a baseline", example: "Writing code to pass a sample test case, or training a simple linear model first." },
    { title: "Iterating with justification", example: "Reasoning about what to try next and understanding the tradeoffs of each change." },
    { title: "Validating", example: "Checking against edge cases, or observing performance on a real test set." },
    { title: "Putting it into practice", example: "Shipping the code or the model in production." },
  ];

  return (
    <section className="mb-12 max-w-3xl">
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        How I approach a new problem
      </h2>

      <p className="text-muted-foreground leading-relaxed text-justify mb-4">
        Over the course of history, humans have solved problems using two primary techniques: <span className="text-foreground">by reasoning with their own minds</span> or <span className="text-foreground"> by using past knowledge.</span>
      </p>

      <p className="text-muted-foreground leading-relaxed text-justify mb-4">

        I believe in a hybrid approach to solving problems. Past knowledge on
        its own never teaches you anything, it only gives you results until
        you face a problem it cannot cover. Relying purely on raw instinct,
        on the other hand, wastes time on problems someone has already
        solved. I use <span className="text-foreground font-medium">past knowledge to understand a problem faster</span>,
        and my <span className="text-foreground font-medium">own reasoning to actually solve it</span>.
      </p>

      <p className="text-muted-foreground leading-relaxed text-justify mb-10">
        In practice, this usually plays out in eight 
        steps <span className="text-foreground">where the core idea is to 
        understand the problem at a fundamental level,</span> regardless 
        of whether the problem is a coding question, a model, a system design question, 
        or something I have never seen before.
      </p>

      <ol className="space-y-3 mb-8">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-mono text-m text-foreground shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-foreground text-lg font-medium">{step.title}</p>
              <p className="text-sm text-muted-foreground">{step.example}</p>
            </div>
          </li>
        ))}
      </ol>

      <button
        onClick={() => setExpanded(!expanded)}
        className="font-mono text-m text-white hover:opacity-80 transition-opacity"
      >
        {expanded ? "Show less ↑" : "Click here to read the full reasoning, with a real example →"}
      </button>

      {expanded && (
        <div className="mt-2 space-y-6 border-t border-border pt-4 text-justify">
          <p className="text-muted-foreground leading-relaxed">
            Take chess as an example. If you watch a video titled
            &quot;Learn how to checkmate in 4 moves&quot; and memorize it, you can
            beat a few weak players. But ask yourself what you actually
            learned about chess. The answer is nothing. That memorized line
            falls apart the moment you face someone who does not walk into
            it. The better approach is to play a couple of games with your raw instincts 
            and observe what is happening. Analyze few games and you will realize that 
            chess is not about capturing pieces but it's about dominating space with your pieces.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Here is the same idea applied to an actual engineering problem.
            Say I am asked to design a hashing algorithm for a product that
            needs minimal collisions. I do not start by trying to invent a
            perfect algorithm from scratch. I first read about existing
            hashing algorithms, and I learn that no algorithm guarantees zero
            collisions. That fact immediately raises a question: why not?
            The answer is that the number line is infinite, and no fixed
            rule can uniquely map an infinite set of integers into a finite
            table. That single realization saves me from chasing something
            that is mathematically impossible.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Past knowledge&apos;s job ends there. Now it is on me to reason
            through the actual constraints of the product: what range of
            integers does it deal with, and is there a pattern in that range
            I can exploit? If the range is finite and has structure, I can
            design a hash function tailored to it, one that keeps collisions
            minimal and the table small. That is the hybrid approach in
            practice: past knowledge tells me what is worth solving, reasoning
            solves it.
          </p>
        </div>
      )}
    </section>
  );
}