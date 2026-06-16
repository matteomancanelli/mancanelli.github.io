---
layout: default
title: 'Neuro-Symbolic Predictive Process Monitoring'
authors: <span class="nobr">Axel Mezini</span>, <span class="nobr">Elena Umili</span>, <span class="nobr">Ivan Donadello</span>, <span class="nobr">Fabrizio Maria Maggi</span>, <span class="nobr">Matteo Mancanelli</span>, <span class="nobr">Fabio Patrizi</span>
publication: Information Systems (IS), Volume 141, 2026.
month: 
month_num: 6
year: 2026
type: journal
paper: IS_2026_NeSyPPM.pdf
doi: 
preprint: 
poster: 
code: 
abstract: "This paper addresses the problem of suffix prediction in Business Process Management (BPM) by proposing a Neuro-Symbolic Predictive Process Monitoring (PPM) approach that integrates data-driven learning with temporal logic-based prior knowledge. While recent approaches leverage deep learning models for suffix prediction, they often fail to satisfy even basic logical constraints due to the absence of explicit integration of domain knowledge during training. We propose a novel method to incorporate Linear Temporal Logic over finite traces (LTLf) into the training process of autoregressive sequence predictors. Our approach introduces a differentiable logical loss function, defined using a soft approximation of LTLf semantics and the Gumbel-Softmax trick, which can be combined with standard predictive losses. This ensures the model learns to generate suffixes that are both accurate and logically consistent. Experimental evaluation on three real-world datasets shows that our method improves suffix prediction accuracy and compliance with temporal constraints. We also introduce two variants of the logic loss (local and global) and demonstrate their effectiveness under noisy and realistic settings. While developed in the context of BPM, our framework is applicable to any symbolic sequence generation task and contributes toward advancing Neuro-Symbolic AI."
bibtex: "@article{mezini2026neurosymbolic,<br/>
  &emsp;title = {Neuro-Symbolic Predictive Process Monitoring},<br/>
  &emsp;author = {Mezini, Axel and Umili, Elena and Donadello, Ivan and Maggi, Fabrizio Maria and Mancanelli, Matteo and Patrizi, Fabio},<br/>
  &emsp;journal = {Information Systems},<br/>
  &emsp;volume = {141},<br/>
  &emsp;pages = {102762},<br/>
  &emsp;year = {2026},<br/>
  &emsp;publisher = {Elsevier}<br/>
  &emsp;issn = {0306-4379}<br/>
  &emsp;doi = {https://doi.org/10.1016/j.is.2026.102762}<br/>
}"
ack: 
---