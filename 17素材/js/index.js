/*��ҳЧ��*/
	/*�ֲ�ͼ*/
		//�ֲ�ͼʵ��
			$(function(){
				//ȫ�ֿ����ֲ��ı���
				var s=0;
				var timer;//����һ�������ֲ�ִ�к����ı���
				//ͼƬ�л�����
				function run(){
					s++;//s����
					if(s==4){
						s=0;
					}
					//s��ͼƬ��ʾ������ͬ������
					$(".banner img").eq(s).fadeIn(500).siblings('img').fadeOut(500);
					$(".banner ul li").eq(s).css({'background':'#00bfff'}).siblings('li').css({'background':'#a5a5a5'});
				}
					timer=setInterval(run,3000);
					$(".banner ul li").mouseenter(function(){
						clearInterval(timer);//��ն�ʱ��
						var lithis=$(this);//��ȡ�����li���
						//���õ��ζ�ʱ��������ٻ�������
						tt=setTimeout(function(){
							//��ȡ��ǰ���
							s=lithis.index();
							$(".banner img").eq(s).fadeIn(500).siblings('img').fadeOut(500);
					$(".banner ul li").eq(s).css({'background':'#00bfff'}).siblings('li').css({'background':'#a5a5a5'});
						})
					})
					           //��li�������Ƴ��¼�(mouseenter),�ָ���ʱ��,��������ζ�ʱ��(���ٻ�����ִ��)
			           $('.banner ul li').mouseleave(function(){
			            clearTimeout(tt);
			            timer=setInterval(run,1000);
			           })
			           //��ҳЧ�������ֲ�Ч��
			           $('.prev').click(function(){
			           	clearInterval(timer);//��ն�ʱ��
			           	s--;
			           	if(s<0){
			           		s=3;
			           	}
					$(".banner img").eq(s).fadeIn(500).siblings('img').fadeOut(500);
					$(".banner ul li").eq(s).css({'background':'#00bfff'}).siblings('li').css({'background':'#a5a5a5'});
			          timer=setInterval(run,3000);
			           })
			           $('.next').click(function(){
			           		clearInterval(timer);//��ն�ʱ��
			           	s++;
			           	if(s>3){
			           		s=0;
			           	}
					$(".banner img").eq(s).fadeIn(500).siblings('img').fadeOut(500);
					$(".banner ul li").eq(s).css({'background':'#00bfff'}).siblings('li').css({'background':'#a5a5a5'});
			            timer=setInterval(run,3000);
			           })
				/*�ٲ���ͼƬ���򻮹���ʽ*/
						/*����li���ӱ߿�λ���ƶ�*/
					   $(function(){
				$(".sign .pic li,.code .pic li").hover(function(){
					$(this).css({"border":"1px solid #ff0036","transform":"translate(0px,-10px)"})
				},function(){
					$(this).css({"border":"none","transform":"translate(0px,10px)"})
				})
			})
					/*��ҳ�ײ��������ӣ�������ɫ*/
						$(function(){
					$(".links .linktop a").hover(function(){
						$(this).css({"color":"rgb(22, 155, 230)"});
					},function(){
						$(this).css({"color":"rgb(104, 104, 104)"});
					})
				})
				/*�̶�����Ч��*/
					$(function(){
				$(window).scroll(function(){
					var t=$(document).scrollTop();
					if(t>300){
						$(".fnav").fadeIn(500);
						
					}else{
						$(".fnav").fadeOut(500);
					}
					if(t>100){
						$(".rbar .m3").show();
					}else{
						$(".rbar .m3").hide();
					}
				})
			})
					/*���½ǹ̶��˵���ʽ*/
					$(function(){
				$('.rbar>.m1').hover(function(){
					$(".wx").show();
				},function(){
					$(".wx").hide();
				})
			})
/*rank���а�ҳ��Ч��*/
				/*ranknav��ѡ����ʽ*/
				$(function(){
					$(".ranknav ul li").hover(function(){
						$(this).addClass("hov").siblings().removeClass('hov');
					},function(){
						//����֮��ִ��hover״̬ͣ���ڵ�һ��li��
						$(".ranknav ul li").eq(0).addClass("hov");
						$(this).removeClass('hov');
					})
				})
/*��������developҳ����ʽ*/
						/*������ƬЧ��*/
						$(function(){
				$(".sq>div").hover(function(){
					$(this).css({"transform":"translate(0,-3px)","box-shadow":' 0 1px 20px rgba(0, 0, 0, 0.15)'})
				},function(){
					$(this).css({"transform":"translate(0,3px)","box-shadow":'0px 0px 0px rgb(245,245,245)'})
						false;
				})
			})
				})