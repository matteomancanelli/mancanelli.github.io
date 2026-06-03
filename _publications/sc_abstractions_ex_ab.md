---
layout: default
title: 'Situation Calculus <span class="nobr">Temporally Lifted Abstractions</span> for <span class="nobr">Generalized Planning</span> - <span class="nobr">Extended Abstract</span>'
authors: <span class="nobr">Giuseppe De Giacomo</span>, <span class="nobr">Yves Lesp&eacute;rance</span>, <span class="nobr">Matteo Mancanelli</span>
publication: Workshop on Symbolic and Neuro-Symbolic Architectures for Intelligent Robotics Technology (SYNERGY 2024), co-located with KR 2024, Hanoi, Vietnam.
month: 
month_num: 11
year: 2024
type: conference
paper: SC_Abstractions_ExAb.pdf
doi: 
preprint: 
poster: 
code: 
abstract: "We present a new formal framework for generalized planning (GP) based on the situation calculus extended with LTL constraints. The GP problem is specified by a first-order basic action theory whose models are the problem instances. This low-level theory is then abstracted into a high-level propositional nondeterministic basic action theory with a single model. A refinement mapping relates the two theories. LTL formulas are used to specify the temporally extended goals as well as assumed trace constraints. If all LTL trace constraints hold at the low level and the high-level model can simulate all the low-level models with respect to the mapping, we say that we have a temporally lifted abstraction. We prove that if we have such an abstraction and the agent has a strategy to achieve a LTL goal under some trace constraints at the abstract level, then there exists a refinement of the strategy to achieve the refinement of the goal at the concrete level. We use LTL synthesis to generate the strategy at the abstract level. We illustrate our approach by synthesizing a program that solves a data structure manipulation problem."
bibtex: "@inproceedings{DBLP:conf/kodis/GiacomoLM24,<br/>
  &emsp;author       = {Giuseppe De Giacomo and
                  Yves Lesp{\\'{e}}rance and
                  Matteo Mancanelli},<br/>
  &emsp;editor       = {Luc{\\'{\\i}}a G{\\'{o}}mez {\\'{A}}lvarez and
                  Jonas Haldimann and
                  Jesse Heyninck and
                  Srdjan Vesic and
                  Francesco Fabiano and
                  Marcello Balduccini},<br/>
  &emsp;title        = {Situation Calculus Temporally Lifted Abstractions for Generalized
                  Planning - Extended Abstract},<br/>
  &emsp;booktitle    = {Joint Proceedings of the Joint Workshop on Knowledge Diversity and
                  Cognitive Aspects of {KR} and the Workshop on Symbolic and Neuro-Symbolic
                  Architectures for Intelligent Robotics Technology (KoDis-CAKR-SYNERGY
                  2024) co-located with the 21st International Conference on Principles
                  of Knowledge Representation and Reasoning {(KR} 2024), Hanoi, Vietnam,
                  November 2-8, 2024},<br/>
  &emsp;series       = {{CEUR} Workshop Proceedings},<br/>
  &emsp;volume       = {3876},<br/>
  &emsp;publisher    = {CEUR-WS.org},<br/>
  &emsp;year         = {2024},<br/>
}"
ack: 
---