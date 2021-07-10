# C27 Covering Numbers

Covering Numbers là một cách để đo độ phức tạp của một tập hợp.

## 27.1. Covering

Definition 27.1 (Covering) Let $A \subset \mathbb{R}^m$ be a set of vectors. We say that $A$ is r-covered by set $A'$, w.r.t the Euclidean metric, if for all $\boldsymbol{a} \in A$ there exists $\boldsymbol{a}' \in A'$ with $||\boldsymbol{a} - \boldsymbol{a}'|| \le r$. We define by $N(r, A)$ the cardinality of the smallest $A'$ that r-covers $A$

### Properties
LEMMA 27.2 For any $A \subset \mathbb{R}^m$, scalar $c > 0$, and vector $\boldsymbol{a}_0 \in \mathbb{R}^m$, we have

$$
\forall r > 0, N(r, \{ c\boldsymbol{a} + \boldsymbol{a}_0: \boldsymbol{a} \in A\}) \le N(cr, A)
$$

LEMMA 27.3 For each $i \in [m]$, let $\phi_i:\mathbb{R} \mapsto \mathbb{R}$ be a p-Lipschitz function; namely, for all $\alpha,\beta \in \mathbb{R}$ we have $|\phi_i(\alpha) - \phi_i(\beta)| \le \rho|\alpha - \beta|$. For $\boldsymbol{a} \in \mathbb{R}^m$ let $\boldsymbol{\phi}(\boldsymbol{a})$ denote the vector $(\phi_1(a_1),...,\phi_n(a_m))$. Let $\boldsymbol{\phi} \circ A = \{\boldsymbol{\phi}(\boldsymbol{a}): \boldsymbol{a} \in A\}$. Then,

$$
N(\rho r, \boldsymbol{\phi}\circ A) \le N(r, A).
$$

## 27.2 From Covering to Rademacher Complexity via Chaining

LEMMA 27.4 Let $c=\min_{\bar{\boldsymbol{a}}} \max_{\boldsymbol{a} \in A}||\boldsymbol{a} - \bar{\boldsymbol{a}}||$. Then, for any integer $M > 0$,

$$
R(A) \le \dfrac{c2^{-M}}{\sqrt m} + \dfrac{6c}{m}\sum_{k = 1}^{M}2^{-k} \sqrt{\log(N(c2^{-k}, A))}.
$$

LEMMA 27.5 Assume that there are $\alpha,\beta > 0$ such that for any $k \ge 1$ we have

$$
\sqrt{\log(N(c2^{-k}, A))} \le \alpha + \beta k
$$
Then,

$$
R(A) \le \dfrac{6c}{m}(\alpha + 2\beta)
$$