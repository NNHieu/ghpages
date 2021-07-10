# A Neural Tangent Kernel Perspective of GANs

[Orginal Paper](https://arxiv.org/pdf/2106.05566.pdf)

Abstract

Phân tích lý thuyết cho GAN thường giả sử một họ có độ lớn tuỳ ý discriminator và không xem xét đến tích chất của các kiến trúc được sử dụng trong practice. Chúng tôi chứng minh rằng việc phân tích dựa trên framework quá đơn giản hoá này không thể đưa ra phân tích có ý nghĩa với việc huấn luyện GAN. Để khắc phục vấn đề này, chúng tôi tận dụng lý thuyết về mạng neural rộng vô hạn để mô hình việc huấn luyện discriminator với nhiều adversarial loss khác nhau thông qua NTK tương ứng. Phân tích của chúng tôi cho thấy khả năng train được của GAN phụ thuộc chủ yếu vào kiến trúc discriminator. Chúng tôi mở rộng nghiên cứu discriminator cho các kiến trúc và loss cụ thể. Ví dụ, chúng tôi thấy rằng GAN được train với integral probability metric loss giảm maximum mean discrepancy với NTK làm kernel. Kết luận của chúng tôi cho thấy khả năng phân tích của framework được đề xuất, giúp mô hình GAN tốt hơn và quy tắc hơn. Chúng tôi đưa ra một bộ công cụ phân tích generic GAN dựa trên framework này, cũng chính nó đã hỗ trợ việc thực nghiệm trong nghiên cứu của chúng tôi.

1. Introduction

- GAN models are notoriously difficult to train and require extensive hyperparameter tuning. 
- A vast literature on theoretical analyses of GAN:
    - Forcus on studying GAN loss function