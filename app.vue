<template>
  <div class="hidden">
    <SvgSprite />
  </div>
  <section class="promo section-mb">
    <Header />
    <div class="promo__container container-main">
      <div class="promo__content">
        <Heading level="h1" customClasses="mb-2">СОЗДАЕМ БОЛЬШЕ, ЧЕМ САЙТЫ — СОЗДАЕМ ВАШ УСПЕХ</Heading>
        <div class="mb-5">
          <p>Сделаем лучше чем нашы конкуреты!</p>
        </div>
        <div class="promo__actions">
          <Button color="purple" :fullWidth="true">ОСТАВИТЬ ЗАЯВКУ</Button>
          <Button :fullWidth="true">Наши работы</Button>
        </div>
      </div>
      <video muted playsinline autoplay loop class="promo__decor">
        <source src="/public/videos/promo-anim.mp4" type="video/mp4"></source>
      </video>
    </div>
  </section>
  <section class="about section-mb">
    <div class="about__container container-main">
      <div class="about__main">
        <div>
          <Heading level="h2" customClasses="mb-5">ЧЕМ МЫ ЗАНИМАЕМСЯ?</Heading>
          <div class="text">
            <p>Находить «изюминку» в каждом проекте, вокруг которой строится весь будущий сайт.</p>
            <p>Это магнит, вызывающий жгучий интерес в глазах Ваших клиентов и притягивающий их внимание.</p>
            <p>Мы создаем и продвигаем сайты. Это значит, что мы не бросим Вас на половине пути, а проведем по шаткому мостику до самого конца: от создания прототипа, до приема заказов.</p>
            <p>Находить «изюминку» в каждом проекте, вокруг которой строится весь будущий сайт.</p>
          </div>
        </div>
        <form action="/" class="about__form">
          <Heading level="h4" customClasses="mb-3">Закажите <span>бесплатную</span> консультацию</Heading>
          <p class="mb-4">Мы подберем вам оптимальное решение.</p>
          <FormField
              id="email"
              type="text"
              placeholder="Email"
              customClass="mb-5"
          />
          <Button color="purple" :fullWidth="true">ОСТАВИТЬ ЗАЯВКУ</Button>
        </form>
      </div>
    </div>
  </section>
  <section class="section-mb">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-8 text-center">ЦЕНА НА РАЗРАБОТКУ САЙТА</Heading>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <PriceCard
            title="Лендинг"
            price="от 500 $"
            deadlines="20-30 дней"
            description="Для нових або невеликих сайтів у неконкурентних тематиках"
        />
        <PriceCard
            title="Лендинг"
            price="от 500 $"
            deadlines="20-30 дней"
            description="1 страница, до 6 блоков"
        />
        <PriceCard
            title="Лендинг"
            price="от 500 $"
            deadlines="20-30 дней"
            description="1 страница, до 6 блоков"
        />
        <PriceCard
            title="Лендинг"
            price="от 500 $"
            deadlines="20-30 дней"
            description="1 страница, до 6 блоков"
        />
      </div>
    </div>
  </section>
  <section class="section-mb">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-1 text-center">ЧТО МЫ УМЕЕМ?</Heading>
      <p class="text-center mb-10">Сделаем лучше чем нашы конкуреты</p>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <ProductCard title="Blablabla" category="Landing Page" link="#" />
        <ProductCard title="Blablabla" category="Landing Page" link="#" />
        <ProductCard title="Blablabla" category="Landing Page" link="#" />
        <ProductCard title="Blablabla" category="Landing Page" link="#" />
        <ProductCard title="Blablabla" category="Landing Page" link="#" />
      </div>
    </div>
  </section>
  <section class="section-mb">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-3">ПОЧЕМУ ВАМ СТОИТ ВЫБРАТЬ ИМЕННО НАС?</Heading>
      <p class="ml-auto mb-10 max-w-[800px]">
        Ми розробили вам зручні умови співпраці. Наші клієнти задоволені та рекомендують нас. Професійне просування сайту ефективними та безпечними методами. Гарантія зростання позицій у пошукових системах. Залучення нових клієнтів на ваш сайт із Google.
      </p>
      <ul class="list">
        <li class="list__item">
          <span class="list__item-number">01</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
        <li class="list__item">
          <span class="list__item-number">02</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода» Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
        <li class="list__item">
          <span class="list__item-number">03</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
        <li class="list__item">
          <span class="list__item-number">04</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
        <li class="list__item">
          <span class="list__item-number">05</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
        <li class="list__item">
          <span class="list__item-number">06</span>
          <Heading level="h4">ПОДХОДИМ С ДРУГОЙ СТОРОНЫ</Heading>
          <p>Ваша компания — это индивидуальное творение. Она заслуживает особого внимания, а не «стандартного подхода»</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="faq section-mb">
    <div class="container-main">
      <div class="faq__content">
        <div>
          <Heading level="h2" customClasses="max-w-[800px] mb-8">ОТВЕТЫ НА САМЫЕ ПОПУЛЯРНЫЕ ВОПРОСЫ</Heading>
          <div class="flex flex-col gap-5">
            <Accordion title="ЧТО ДЕЛАТЬ, ЕСЛИ У МЕНЯ НЕТ ТЕХНИЧЕСКОГО ЗАДАНИЯ?">
              Конечно ✅ Более того, мы не ограничиваемся временными рамками, а предоставляем поддержку проекта бессрочно. Вы можете в любой момент, после разработки вашего сайта обращаться к нам по любым корректировкам или за консультацией. ❗️ВАЖНО: тех. поддержка подразумевает устранение неисправностей в элементах сайта или функционале, которые были предусмотрены в ТЗ. ☝️ Если после разработки сайта вы хотите добавить новые визуальные или функциональные элементы - это считается отдельным фронтом работ, который оценивается также отдельно.
            </Accordion>
            <Accordion title="ПРЕДОСТАВЛЯЕТЕ ЛИ ВЫ ТЕХ. ПОДДЕРЖКУ ПОСЛЕ РАЗРАБОТКИ САЙТА?">
              Конечно ✅ Более того, мы не ограничиваемся временными рамками, а предоставляем поддержку проекта бессрочно. Вы можете в любой момент, после разработки вашего сайта обращаться к нам по любым корректировкам или за консультацией. ❗️ВАЖНО: тех. поддержка подразумевает устранение неисправностей в элементах сайта или функционале, которые были предусмотрены в ТЗ. ☝️ Если после разработки сайта вы хотите добавить новые визуальные или функциональные элементы - это считается отдельным фронтом работ, который оценивается также отдельно.
            </Accordion>
            <Accordion title="ЧТО ДЕЛАТЬ, ЕСЛИ У МЕНЯ НЕТ ТЕХНИЧЕСКОГО ЗАДАНИЯ?">
              Конечно ✅ Более того, мы не ограничиваемся временными рамками, а предоставляем поддержку проекта бессрочно. Вы можете в любой момент, после разработки вашего сайта обращаться к нам по любым корректировкам или за консультацией. ❗️ВАЖНО: тех. поддержка подразумевает устранение неисправностей в элементах сайта или функционале, которые были предусмотрены в ТЗ. ☝️ Если после разработки сайта вы хотите добавить новые визуальные или функциональные элементы - это считается отдельным фронтом работ, который оценивается также отдельно.
            </Accordion>
            <Accordion title="ЧТО ДЕЛАТЬ, ЕСЛИ У МЕНЯ НЕТ ТЕХНИЧЕСКОГО ЗАДАНИЯ?">
              Конечно ✅ Более того, мы не ограничиваемся временными рамками, а предоставляем поддержку проекта бессрочно. Вы можете в любой момент, после разработки вашего сайта обращаться к нам по любым корректировкам или за консультацией. ❗️ВАЖНО: тех. поддержка подразумевает устранение неисправностей в элементах сайта или функционале, которые были предусмотрены в ТЗ. ☝️ Если после разработки сайта вы хотите добавить новые визуальные или функциональные элементы - это считается отдельным фронтом работ, который оценивается также отдельно.
            </Accordion>
            <Accordion title="ЧТО ДЕЛАТЬ, ЕСЛИ У МЕНЯ НЕТ ТЕХНИЧЕСКОГО ЗАДАНИЯ?">
              Конечно ✅ Более того, мы не ограничиваемся временными рамками, а предоставляем поддержку проекта бессрочно. Вы можете в любой момент, после разработки вашего сайта обращаться к нам по любым корректировкам или за консультацией. ❗️ВАЖНО: тех. поддержка подразумевает устранение неисправностей в элементах сайта или функционале, которые были предусмотрены в ТЗ. ☝️ Если после разработки сайта вы хотите добавить новые визуальные или функциональные элементы - это считается отдельным фронтом работ, который оценивается также отдельно.
            </Accordion>
          </div>
        </div>
        <img class="faq__decor" src="public/images/faq-decor.svg" alt="">
      </div>
    </div>
  </section>
  <section class="section-mb">
    <div class="container-main">
      <div class="grid grid-cols-[repeat(2,1fr)] gap-14">
        <div>
          <Heading level="h2" customClasses="max-w-[800px] mb-8">ПЕРЕХОДИМ К <span>ДЕЙСТВИЯМ</span></Heading>
          <div class="text">
            <p>Чтобы создать продукт, который будет «бить в десятку», давайте познакомимся немного поближе!</p>
            <p>Короткая бриф-анкета позволит нам лучше узнать специфику Вашего бизнеса, и сформировать качественное предложение. На заполнение уйдет меньше 5 минут!</p>
          </div>
        </div>
        <form action="/" class="form">
          <Heading level="h3" customClasses="mb-5">Успешные проекты начинают свой путь с этой формы!</Heading>
          <FormField
              id="email"
              type="text"
              placeholder="Имя"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="email"
              placeholder="Email"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="text"
              placeholder="Ваш Telegram"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="textarea"
              placeholder="Описание Заказа"
              customClass="mb-2"
          />
          <Button color="green" customClass="ml-auto mt-1">ОТПРАВИТЬ</Button>
        </form>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
  import SvgSprite from "~/components/SvgSprite.vue";
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";
  import Button from "~/components/Button.vue";
  import FormField from "~/components/FormField.vue";
  import PriceCard from "~/components/PriceCard.vue";
  import ProductCard from "~/components/ProductCard.vue";
  import Accordion from "~/components/Accordion.vue";
  import Heading from "~/components/Heading.vue";
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
