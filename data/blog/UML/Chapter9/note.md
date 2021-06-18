---
title: Chapter 9 Linear Predictor
date: '2021-05-02'
tags: ['learning theory', 'UML']
draft: false
summary: ''
---

# C9 Linear Predictor

## 1. Giới thiệu

Là một trong những họ hypothesis class hữu dụng nhất. Lý do:
- (chính) chúng có khả năng học hiệu quả trong nhiều trường hợp
- Dễ hiểu mà vẫn có khả năng fit the data tốt trong nhiều vấn đề thực tế.

Chương này giới thiệu một vài hypothesis class thuộc họ này:
- Halfspaces
- Linear regression predictors
- Logistic regression predictors

và một số thuật toán học (sử dụng hướng tiếp cận ERM) liên quan:
- Linear Programming
- Perceptron algorithm for the class of halfspaces
- Least Squares algorithm for LR

Một số định nghĩa:

- The class of affine functions:

$$
L_d = \{ h_{\boldsymbol{w}, b}: \boldsymbol{w} \in \mathbb{R}^d, b \in \mathbb{R} \}
\text{ where } h_{\boldsymbol{w}, b} = \langle \boldsymbol{w}, \boldsymbol{x} \rangle + b
$$

- Khác nhau giữa các lớp hypothesis của linear predictor là sự kết hợp của một hàm $\phi:\mathbb{R} \rightarrow \mathcal{Y}$ trên $L_d$. Tức $\phi \circ h_{\boldsymbol{w}, d}$

Do mỗi affine function trong $\mathbb{R}^d$ có thể được viết lại bởi một đồng cấu là một linear function trong $\mathbb{R}^{d + 1}$ thông qua phép biến đổi là thêm hằng số 1 vào mỗi input vector. Để đơn giản, có thể bỏ qua bias term và coi $L_d$ như là lớp của các linear function đồng cấu và có dạng $h_{\boldsymbol{w}}(\boldsymbol{x})=\langle \boldsymbol{w}, \boldsymbol{x} \rangle$

## 2. Halfspaces
Được thiết kế cho các binary classification problem, với $\mathcal{X} = \mathbb{R}^d$ và $\mathcal{Y} = \{-1, +1\}$. Lớp các halfspaces được định nghĩa như sau:

$$
HS_d = \text{sign} \circ L_d
$$

Chứng minh được $VCdim(HS_d) = d + 1$. Do đó sample complexity là $\Omega(\frac{d + \log(1/\delta)}{\epsilon})$.

Sau đây là 2 cài đặt learner sử dụng ERM rule cho trường hợp realizability assumtion được thoả mãn.

Với các trường hợp realizability assumtion không được thoả mãn việc tích toán được chứng minh là computationally hard. Có một vài hướng tiếp cận, trong đó phổ biến nhất là sử dụng các surrogate loss function.

### 2.1 Linear programming for the class of halfspaces

Linear Programming:

$$
\max_{\boldsymbol{w} \in \mathbb{R}^d}  \langle \boldsymbol{w}, \boldsymbol{u} \rangle \\
\text{subject to } A\boldsymbol{w} \ge \boldsymbol{v}
$$

Yêu cầu the realizability assumtion được thoả mãn do đó tồn tại $w^*$ là một solution sao cho với mọi $i$:

$$
y_i\langle \boldsymbol{w}^*, \boldsymbol{x_i} \rangle > 0 \\

\Rightarrow \exist \bar{\boldsymbol{w}}=\dfrac{1}{\gamma}\boldsymbol{w}^*, \forall i \in [m], y_i \langle \bar{\boldsymbol{w}}, \boldsymbol{x_i} \rangle \ge 1 \\
$$

Với $\gamma = \min_i(y_i\langle \boldsymbol{w}^*, \boldsymbol{x_i} \rangle)$.

Rõ ràng $\langle \bar{\boldsymbol{w}}, \boldsymbol{x_i} \rangle > 0$ là một ERM predictor.

Ex. Sử dụng LP solver để tìm $\bar{\boldsymbol{w}}$. (Với $\boldsymbol{u} = \boldsymbol{0}$)


### 2.2 Perceptron for Halfspaces

Là một thuật toán lặp. 

> input: Một training set $(\boldsymbol{x_1}, y_1), (\boldsymbol{x_2}, y_2), ..., (\boldsymbol{x_m}, y_m)$  
> Khởi tạo: $\boldsymbol{w^{(1)}} = \boldsymbol{0}$  
> for t = 1, 2, ...  
> if $(\exist i \text{ s.t } y_i\langle \boldsymbol{w}^{(t)}, \boldsymbol{x}_i \rangle \le 0)$ then  
> $\boldsymbol{w}^{(t + 1)} = \boldsymbol{w}^{(t)} + y_ix_i$  
> else  
> output $\boldsymbol{w}^{(t)}$

Theorem 9.1 Giả sử $(\boldsymbol{x_1}, y_1), (\boldsymbol{x_2}, y_2), ..., (\boldsymbol{x_m}, y_m)$ là separable, với $B = \min\{|\boldsymbol{w}||: \forall i \in [m], y_i\langle \boldsymbol{w}, \boldsymbol{x}_i \rangle \ge 1\}$ và với $R = \max_i||\boldsymbol{x}_i||$. Khi đó thuật toán Perceptron sẽ dừng sau nhiều nhất $(RB)^2$ vòng lặp, và khi dừng điều kiện $\forall i \in [m], y_i\langle \boldsymbol{w}, \boldsymbol{x}_i \rangle > 0$ được đảm bảo.

Proof:

Key ideas:

$$
1 \ge \dfrac{\langle \boldsymbol{w}^*, \boldsymbol{w}^{(T + 1)} \rangle}{||\boldsymbol{w}^*||.||\boldsymbol{w}^{(T + 1)}||} \ge \dfrac{\sqrt{T}}{RB}
$$

### 2.4 The VC Dimentation of Halfspaces

## 3. Linear Regression

$$
\mathcal{H}_{reg} = L_d = \{\boldsymbol{x} \rightarrow \langle \boldsymbol{w}, \boldsymbol{x} \rangle + b: \boldsymbol{w} \in \mathbb{R}^d, b \in \mathbb{R}\}
$$

Loss function:
- True False loss
- L2
- L1
- ...

Do không phải là binary prediction task, chúng ta không thể phân tích sample complexity sử dụng VC-dimension. Một cách khác là dựa trên "discretization trick"

Sau đây là các thuật toán học

### 3.1 Least Squares

$$
\argmin_{\boldsymbol{w}} L2_S(h_w)
$$

Tính gradient và tìm nghiệm:

$$
\dfrac{2}{m}\sum_{i=1}^{m}(\langle \boldsymbol{w}, \boldsymbol{x}_i \rangle - y_i)\boldsymbol{x}_i = 0
$$

Với $A = \sum_{i=1}^{m}\boldsymbol{x}_i\boldsymbol{x}_i^T$ và $\boldsymbol{b} = \sum_{i=1}^{m}y_i\boldsymbol{x}_i$. Phương trình trên tương đương $A\boldsymbol{w}=\boldsymbol{b}$.

Do $A$ đối xứng nên ta có thể viết nó dưới dạng eigenvalue decomposition $A = VDV^T$. Đặt $A^+ = VD^+V^T$ với $D^+$ là ma trận đường chéo và $D^+_{i,i} = 0$ nếu $D_{i,i} = 0$ còn lại $D^+_{i,i} = 1/D_{i,i}$.

Khi đó:

$$
A \hat{\boldsymbol{w}} = AA^+\boldsymbol{b} = VDD^+V^Tb = \sum_{i: D_{i,i} \neq 0}\boldsymbol{v}_i\boldsymbol{v}_i^T \boldsymbol{b}
$$

Do $Span(\{\boldsymbol{x}_i:i \in [m]\}) = Span({\boldsymbol{v}_i: i \in [m], D_{i, i} \neq 0 })$ nên $A\hat{\boldsymbol{w}} = \boldsymbol{b}$.

### 3.2 Linear Regression for Polynomial Regression Tasks

$$
\psi(x) = (1, x, x^2, ..., x^n)
$$

## 4. Logistic Regression

$$
\phi_{sig}(z) = \dfrac{1}{1 + \exp(-z)}\\
$$

$$
H_{sig} = \phi_{sig} \circ L_d
$$

Logistic loss function, how bad it is to predict some $h_{\boldsymbol{w}}(\boldsymbol{x}) \in [0, 1]$ given that the true label is $y \in \{-1, 1\}$.

$$
l(h_{\boldsymbol{w}}, (\boldsymbol{x}, y)) = \log(1 + \exp(-y*\langle \boldsymbol{w}, \boldsymbol{x} \rangle))
$$

## 5. Summary
