import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Icon name="Code" className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">WebDev Studio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#services">Услуги</a>
              <a href="#pricing">Тарифы</a>
              <a href="#reviews">Отзывы</a>
              <a href="#team">Команда</a>
              <a href="#contact">Контакты</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button>Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Создаём сайты и приложения 
            <br />
            <span className="text-blue-200">которые работают</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Профессиональная веб-разработка от идеи до запуска. 
            Современные технологии, быстрая разработка, гарантия результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки веб-проектов любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Веб-сайты</CardTitle>
                <CardDescription>
                  Корпоративные сайты, лендинги, интернет-магазины
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Адаптивный дизайн</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />SEO-оптимизация</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Быстрая загрузка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Веб-приложения</CardTitle>
                <CardDescription>
                  SPA, PWA, панели управления, CRM-системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />React/Vue.js</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />API интеграция</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Безопасность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Техническая поддержка</CardTitle>
                <CardDescription>
                  Поддержка, обновления, доработки проектов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />24/7 мониторинг</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Обновления</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Консультации</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет для вашего проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Стартовый</CardTitle>
                <CardDescription>Для малого бизнеса</CardDescription>
                <div className="text-3xl font-bold">от 50 000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />До 5 страниц</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Адаптивный дизайн</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Базовая SEO</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Форма обратной связи</li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary border-2">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Популярный</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Бизнес</CardTitle>
                <CardDescription>Для растущих компаний</CardDescription>
                <div className="text-3xl font-bold">от 120 000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />До 15 страниц</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />CMS система</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Расширенная SEO</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Интеграции</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />3 месяца поддержки</li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Корпоративный</CardTitle>
                <CardDescription>Для крупных проектов</CardDescription>
                <div className="text-3xl font-bold">от 300 000 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Без ограничений</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Веб-приложение</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />API разработка</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Высокие нагрузки</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />12 месяцев поддержки</li>
                </ul>
                <Button className="w-full" variant="outline">Обсудить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>АМ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Алексей Михайлов</CardTitle>
                    <CardDescription>ООО "ТехСтройИнжиниринг"</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Отличная команда! Создали корпоративный сайт точно в срок и в рамках бюджета. 
                  Особенно понравилась скорость работы и внимание к деталям."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>ЕС</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Елена Смирнова</CardTitle>
                    <CardDescription>Интернет-магазин "ModaStyle"</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Разработали интернет-магазин с нуля. Продажи выросли на 40% уже в первый месяц! 
                  Сайт работает быстро, удобная админка."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>ДК</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Козлов</CardTitle>
                    <CardDescription>Стартап "EcoTech"</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Помогли создать MVP нашего стартапа. Профессиональный подход, современные технологии. 
                  Рекомендую для сложных проектов!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты в области веб-разработки
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">ИП</AvatarFallback>
                </Avatar>
                <CardTitle>Игорь Петров</CardTitle>
                <CardDescription>Ведущий разработчик</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  5+ лет опыта в React, Node.js, TypeScript
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">АС</AvatarFallback>
                </Avatar>
                <CardTitle>Анна Сидорова</CardTitle>
                <CardDescription>UX/UI дизайнер</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  4+ года в веб-дизайне, Figma, Adobe Creative Suite
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">МК</AvatarFallback>
                </Avatar>
                <CardTitle>Михаил Козлов</CardTitle>
                <CardDescription>Backend разработчик</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  6+ лет с Python, PostgreSQL, API разработка
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">API</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl">ОВ</AvatarFallback>
                </Avatar>
                <CardTitle>Ольга Волкова</CardTitle>
                <CardDescription>Проект-менеджер</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  3+ года управления IT проектами, Agile, Scrum
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Scrum</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input type="tel" placeholder="+7 (900) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Описание проекта</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." className="min-h-[100px]" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                    <span>hello@webdevstudio.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    <span>Москва, ул. Тверская, 1</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                    <span>Пн-Пт: 10:00 - 19:00</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Гарантия качества</h4>
                      <p className="text-sm text-muted-foreground">12 месяцев гарантии на все работы</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Zap" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Быстрая разработка</h4>
                      <p className="text-sm text-muted-foreground">Сроки от 2 недель до 3 месяцев</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Современные технологии</h4>
                      <p className="text-sm text-muted-foreground">React, Node.js, TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Code" className="h-6 w-6" />
                <span className="font-bold text-lg">WebDev Studio</span>
              </div>
              <p className="text-primary-foreground/80">
                Создаём веб-решения, которые работают и приносят результат вашему бизнесу.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Веб-сайты</li>
                <li>Веб-приложения</li>
                <li>Мобильные приложения</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>hello@webdevstudio.ru</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 WebDev Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;