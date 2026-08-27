---
anchor: research
---

My research seeks to build assurance frameworks that empower people and societies to retain meaningful control over AI systems, so that these systems strengthen, rather than displace, human judgement, expertise and creativity.

At *the model level*, I develop validated instruments for observing AI behaviour and bounded controls for changing it. At *the task level*, I design the human-AI system as a whole, accounting for users who differ, learn, and change while the AI adapts, while maintaining human agency. At *the societal level*, I work with communities to define legitimate objectives and translate them into technical requirements and tools for governance.

In my research, I use formal lenses and methodologies from mathematics, statistics, computer science, machine learning, HCI, and domain science (e.g. policy, psychology, social science, clinical science).

<figure class="diagram">
<svg class="assurance-diagram" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1200 600"
     width="1200"
     height="600"
     role="img"
     aria-labelledby="diagram-title diagram-description"
     preserveAspectRatio="xMidYMid meet">
  <title id="diagram-title">Assurance Framework for Human-Centered AI</title>
  <desc id="diagram-description">Three nested research levels. The model sits inside the task, and both sit inside society. Each level is paired with its research goal. Hover a ring or a level to highlight it.</desc>

  <style>
    .assurance-diagram {
      --ink: #4c473f;
      --ink-strong: #332e28;
      --rule: #d9dee7;
      --model: #2563eb;
      --task: #0f8a7a;
      --society: #7c4dcc;
    }

    .assurance-diagram .heading,
    .assurance-diagram .ring-label,
    .assurance-diagram .level,
    .assurance-diagram .goal {
      font-family: "EB Garamond", Garamond, "Times New Roman", serif;
    }

    .assurance-diagram .heading {
      fill: var(--ink);
      font-size: 26px;
      font-weight: 500;
      text-anchor: middle;
    }

    .assurance-diagram .ring {
      stroke-width: 2;
      cursor: pointer;
    }

    .assurance-diagram .society-ring {
      fill: var(--society);
      fill-opacity: 0.07;
      stroke: var(--society);
    }

    .assurance-diagram .task-ring {
      fill: var(--task);
      fill-opacity: 0.09;
      stroke: var(--task);
    }

    .assurance-diagram .model-ring {
      fill: var(--model);
      fill-opacity: 0.13;
      stroke: var(--model);
    }

    .assurance-diagram .ring-label,
    .assurance-diagram .level {
      fill: var(--ink);
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 2.2px;
      transition: fill .15s ease;
    }

    .assurance-diagram .ring-label {
      text-anchor: middle;
    }

    .assurance-diagram .level {
      text-anchor: end;
    }

    .assurance-diagram .goal {
      fill: var(--ink);
      font-size: 22px;
      font-weight: 400;
      transition: fill .15s ease;
    }

    .assurance-diagram .core-dot {
      fill: var(--model);
    }

    .assurance-diagram .rule {
      stroke: var(--rule);
      stroke-width: 1;
    }

    .assurance-diagram .accent {
      stroke-width: 3;
    }

    .assurance-diagram .row-hit {
      fill: transparent;
      cursor: pointer;
    }

    .assurance-diagram [data-level].is-active .ring-label,
    .assurance-diagram [data-level].is-active .level,
    .assurance-diagram [data-level].is-active .goal {
      font-weight: 700;
      fill: var(--ink-strong);
    }
  </style>

  <text class="heading" x="600" y="58">Assurance Framework for Human-Centered AI</text>

  <g aria-label="Nested research levels">
    <g data-level="society">
      <circle class="ring society-ring" cx="285" cy="327" r="220"/>
      <text class="ring-label" x="285" y="153">SOCIETY</text>
    </g>
    <g data-level="task">
      <circle class="ring task-ring" cx="285" cy="347" r="146"/>
      <text class="ring-label" x="285" y="252">TASK</text>
    </g>
    <g data-level="model">
      <circle class="ring model-ring" cx="285" cy="365" r="76"/>
      <circle class="core-dot" cx="285" cy="339" r="5"/>
      <text class="ring-label" x="285" y="376">MODEL</text>
    </g>
  </g>

  <g aria-label="Research goals">
    <g data-level="model" aria-label="Model: Measure AI behaviour and bound the effects of intervention">
      <rect class="row-hit" x="560" y="135" width="580" height="80"/>
      <line class="accent" x1="599" y1="150" x2="670" y2="150" stroke="var(--model)"/>
      <text class="level" x="670" y="190">MODEL</text>
      <text class="goal" x="690" y="185">
        <tspan x="690" dy="0">Measure AI behaviour and bound</tspan>
        <tspan x="690" dy="31">the effects of intervention.</tspan>
      </text>
    </g>

    <line class="rule" x1="590" y1="255" x2="1140" y2="255"/>

    <g data-level="task" aria-label="Task: Adapt to changing users without eroding their agency or expertise">
      <rect class="row-hit" x="560" y="260" width="580" height="80"/>
      <line class="accent" x1="619" y1="275" x2="670" y2="275" stroke="var(--task)"/>
      <text class="level" x="670" y="315">TASK</text>
      <text class="goal" x="690" y="310">
        <tspan x="690" dy="0">Adapt to changing users without</tspan>
        <tspan x="690" dy="31">eroding their agency or expertise.</tspan>
      </text>
    </g>

    <line class="rule" x1="590" y1="380" x2="1140" y2="380"/>

    <g data-level="society" aria-label="Society: Translate community-defined values into technical and policy requirements">
      <rect class="row-hit" x="560" y="385" width="580" height="80"/>
      <line class="accent" x1="584" y1="400" x2="670" y2="400" stroke="var(--society)"/>
      <text class="level" x="670" y="440">SOCIETY</text>
      <text class="goal" x="690" y="435">
        <tspan x="690" dy="0">Translate community-defined values into</tspan>
        <tspan x="690" dy="31">technical and policy requirements.</tspan>
      </text>
    </g>
  </g>

  <script><![CDATA[
    (function () {
      var svg = document.currentScript.closest('svg');
      var groups = {};
      svg.querySelectorAll('[data-level]').forEach(function (el) {
        var level = el.getAttribute('data-level');
        (groups[level] = groups[level] || []).push(el);
      });
      function setActive(level, active) {
        (groups[level] || []).forEach(function (el) {
          el.classList.toggle('is-active', active);
        });
      }
      Object.keys(groups).forEach(function (level) {
        groups[level].forEach(function (el) {
          el.addEventListener('mouseenter', function () { setActive(level, true); });
          el.addEventListener('mouseleave', function () { setActive(level, false); });
        });
      });

      var sources = {
        model: { file: '/assets/images/model-level-research-map.svg', title: 'Model-level assurance research map' },
        task: { file: '/assets/images/task-level-research-map.svg', title: 'Task-level assurance research map' },
        society: { file: '/assets/images/societal-level-research-map.svg', title: 'Societal-level assurance research map' }
      };
      var cache = {};
      var openLevel = null;

      // The #research-detail panel lives after this <script> in the document,
      // so it doesn't exist yet when this inline script runs during parsing.
      // Look it up lazily (inside the functions) rather than caching it now.
      function closeDetail() {
        var detail = document.getElementById('research-detail');
        if (!detail) return;
        detail.hidden = true;
        openLevel = null;
      }

      function openDetail(level) {
        var detail = document.getElementById('research-detail');
        var detailTitle = document.getElementById('research-detail-title');
        var detailContent = document.getElementById('research-detail-content');
        if (!detail || !sources[level]) return;
        detailTitle.textContent = sources[level].title;
        detail.hidden = false;
        openLevel = level;
        if (cache[level]) {
          detailContent.innerHTML = cache[level];
        } else {
          detailContent.innerHTML = '<p style="padding:1em;">Loading…</p>';
          fetch(sources[level].file)
            .then(function (r) { return r.text(); })
            .then(function (svgText) {
              cache[level] = svgText;
              if (openLevel === level) detailContent.innerHTML = svgText;
            })
            .catch(function () {
              detailContent.innerHTML = '<p style="padding:1em;">Could not load chart.</p>';
            });
        }
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      Object.keys(groups).forEach(function (level) {
        groups[level].forEach(function (el) {
          el.addEventListener('click', function () {
            if (openLevel === level) {
              closeDetail();
            } else {
              openDetail(level);
            }
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'research-detail-close') {
          closeDetail();
        }
      });
    })();
  ]]></script>
</svg>
</figure>

<div class="research-detail" id="research-detail" hidden>
  <div class="research-detail-header">
    <span class="research-detail-title" id="research-detail-title"></span>
    <button type="button" class="research-detail-close" id="research-detail-close" aria-label="Close detail chart">&times;</button>
  </div>
  <div class="research-detail-content" id="research-detail-content"></div>
</div>
