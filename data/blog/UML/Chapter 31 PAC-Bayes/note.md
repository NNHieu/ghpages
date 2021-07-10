---
title: Chapter 31 PAC-Bayes
date: '2021-06-18'
tags: ['learning theory', 'UML']
draft: false
summary: ''
---

# PAC-Bayes approach

Further generalizing idea of MDL and Occam's razor, PAC-Bayesian approach expresses the prior knowledge by defining prior distribution over the hypothesis class.

## 0. Notation

- Minimum Description Length (MDL) and Occam’s razor principles
- Bayesian reasoning
    - Prior distribution and Posterior distribution
- The Kullback-Leibler divergence
- Generalization loss
- The regularized risk minimization principle

## 1. PAC-Bayes Bounds

Assign a probability (density) for each $h \in \mathcal{H}$ as the prior score of $h$, which we denote by $P$.  
The learning process defines a posterior probability over $\mathcal{H}$, which we denote by $Q$.  
We define the loss of $Q$ on an example $z$ to be  

$$
l(Q, z) \overset{\operatorname{def}}= \underset{h \sim Q}{\mathbb{E}}[l(h, z)]
$$

By the linearity of expectation:

$$
L_\mathcal{D}(Q) \overset{\operatorname{def}}= \underset{h \sim Q}{\mathbb{E}}[L_\mathcal{D}(h)] \text{ and } L_S(Q) \overset{\operatorname{def}}= \underset{h \sim Q}{\mathbb{E}}[L_S(h)]
$$

> Theorem 31.1  
> Let:
> - $\mathcal{D}$ over $Z$
> - $\mathcal{H}$
> - $l: \mathcal{H} \times Z \mapsto [0, 1]$
> - $P$ - prior distribution over $\mathcal{H}$
> - $\delta \in (0, 1)$  
> 
> Then for all distribution $Q$ over $\mathcal{H}$ (even s.t depend on $S$), we have:  
> $\underset{S \sim \mathcal{D}^m}{\mathbb{P}}[L_\mathcal{D}(Q) \le L_S(Q) + \sqrt\dfrac{KL(Q||P) + \ln m/\delta}{2(m - 1)}] \ge 1 - \delta$ 

Remark 31.1 (Regulerization) The PAC-Bayes bound leads to the following learning rule:
Given a prior $P$, return a posterior $Q$ that minimizes the function:

$$
L_S(Q) + \sqrt\dfrac{KL(Q||P) + \ln m/\delta}{2(m - 1)}
$$

This rule is similar to the regularized risk minimization principle.