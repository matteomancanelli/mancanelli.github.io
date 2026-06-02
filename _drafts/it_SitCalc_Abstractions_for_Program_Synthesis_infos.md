---
layout: custom-single
title: SitCalc Abstractions for Program Synthesis
toc: false
permalink: /it/SitCalc-Abstractions-for-Program-Synthesis
lang: it
classes: wide
translation: 
  - en: SitCalc-Abstractions-for-Program-Synthesis
---

Questa pagina contiene tutte le informazioni su "Situation Calculus Temporally Lifted Abstractions for Program Synthesis", di Giuseppe De Giacomo, Yves Lespérance e Matteo Mancanelli. 

<h2>Link</h2>

<div class="myitem"> 
    <div>Qui trovi alcuni link utili: </div>
    <div class="myitemlinks"> 
        [<a><label for=abstract>abstract</label></a>]
        [<a href="{{ site.url }}/assets/pdf/SC_Abstractions_for_Program_Synthesis_abstract.pdf" target="_blank" rel="noopener noreferrer">short paper</a>]
        [<a href="{{ site.url }}/assets/pdf/SC_Abstractions_for_Program_Synthesis.pdf" target="_blank" rel="noopener noreferrer">full paper</a>]
        [<a href="{{ site.url }}/assets/pdf/ESSAI24_Poster.pdf" target="_blank" rel="noopener noreferrer">poster</a>]
        <input type='checkbox' id=abstract>
        <div style="padding: 0.5em;">
            We address a program synthesis task where one wants to automatically synthesize a controller that operates on data structures to accomplish an objective. We develop a framework that allows a programmer to provide an abstract description of how the data structure should evolve to satisfy the objectives and then derive a concrete program from that abstraction. The framework is based on the nondeterministic situation calculus, extended with LTL trace constraints. We propose a notion of temporally lifted abstraction to address the scenario in which we have a single high-level action theory/model with incomplete information and nondeterministic actions and a concrete action theory with several models and complete information. LTL formulas are used to specify the temporally extended goals as well as assumed trace constraints on the data structures used that hold at the concrete level. We show show that if we have such a temporally lifted abstraction and the agent has a strategy to achieve a LTL goal under some trace constraints at the abstract level, then there exists a refinement of the strategy to achieve the refinement of the goal at the concrete level. If the abstract theory is propositional, we can try to obtain such a strategy through LTL synthesis. We present several examples where we use our framework to solve problems involving data structures. We discuss the relationship of our approach to work on generalized planning.
        </div>
    </div>
</div>

<h2>Contatti</h2>
<div class="myitem">
    <div class="myitemname"><strong>Giuseppe De Giacomo</strong></div>
    <div class="myiteminfo">University of Oxford, Oxford, UK</div>
    <div class="myiteminfo">Email: giuseppe.degiacomo [at] cs.ox.ac.uk</div>
    <div class="myitemlinks">[<a href="http://www.diag.uniroma1.it/degiacom/" target="_blank" rel="noopener noreferrer">{{ site.data.custom-ui-text[page.lang].website }}</a>]</div>
</div>
<div class="myitem">
    <div class="myitemname"><strong>Yves Lespérance</strong></div>
    <div class="myiteminfo">York University, Toronto, ON, Canada</div>
    <div class="myiteminfo">Email: lesperan [at] eecs.yorku.ca</div>
    <div class="myitemlinks">[<a href="http://www.cse.yorku.ca/~lesperan/" target="_blank" rel="noopener noreferrer">{{ site.data.custom-ui-text[page.lang].website }}</a>]</div>
</div>
<div class="myitem">
    <div class="myitemname"><strong>Matteo Mancanelli</strong></div>
    <div class="myiteminfo">Sapienza University, Rome, Italy</div>
    <div class="myiteminfo">Email: mancanelli [at] diag.uniroma1.it</div>
</div>