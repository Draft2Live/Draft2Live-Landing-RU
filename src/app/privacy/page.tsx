import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Политика конфиденциальности | Draft2Live',
  description: 'Политика конфиденциальности Draft2Live — обработка персональных данных в соответствии с GDPR и польским законодательством о защите персональных данных.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; На главную</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Политика конфиденциальности</h1>
          <p className="text-text-muted text-sm mb-12">Последнее обновление: 10 апреля 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Общие положения</h2>
              <p>Настоящая Политика конфиденциальности описывает, как компания Myicode sp. z o.o. с зарегистрированным офисом в Варшаве (ul. Postępu 15, 02-676 Warszawa, NIP: 5214167154) (далее — &laquo;Оператор&raquo;, &laquo;мы&raquo;), управляющая платформой Draft2Live (далее — &laquo;Платформа&raquo;), собирает, обрабатывает, хранит и защищает ваши персональные данные в соответствии с Общим регламентом по защите данных (Регламент (ЕС) 2016/679, далее — &laquo;GDPR&raquo;) и польским Законом от 10 мая 2018 года о защите персональных данных.</p>
              <p className="mt-3">Используя Платформу, вы подтверждаете, что ознакомились с настоящей Политикой. Если вы не согласны с условиями обработки данных, пожалуйста, не пользуйтесь Платформой.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Контролёр данных</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Myicode sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">NIP: 5214167154</p>
                <p className="mt-1">Платформа: Draft2Live</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Какие данные мы собираем</h2>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.1. Данные, которые вы предоставляете напрямую</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Регистрационные данные:</strong> имя, фамилия, email, пароль</li>
                <li><strong className="text-white">Платёжные данные:</strong> сведения о кредитной/дебетовой карте, адрес для выставления счёта (обрабатываются через сертифицированного платёжного провайдера)</li>
                <li><strong className="text-white">Данные профиля:</strong> название компании, сайт, языковые настройки, Brand Voice</li>
                <li><strong className="text-white">Загруженные файлы:</strong> документы Базы знаний, изображения, тексты для обработки</li>
                <li><strong className="text-white">Данные коммуникации:</strong> сообщения в службу поддержки, обратная связь</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.2. Данные, собираемые автоматически</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Технические данные:</strong> IP-адрес, тип и версия браузера, операционная система, разрешение экрана</li>
                <li><strong className="text-white">Данные использования:</strong> посещённые страницы, длительность сессии, действия на Платформе, количество сгенерированных статей</li>
                <li><strong className="text-white">Cookies и аналогичные технологии:</strong> подробнее — в нашей <Link href="/cookies" className="text-primary hover:underline">Политике cookies</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Цели и правовые основания обработки</h2>
              <p>Мы обрабатываем ваши персональные данные на следующих правовых основаниях (статья 6 GDPR):</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Исполнение договора (ст. 6(1)(b) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Создание и управление вашим Аккаунтом</li>
                    <li>Предоставление услуг Платформы (генерация контента, SEO-оптимизация, публикация)</li>
                    <li>Обработка платежей и выставление счетов</li>
                    <li>Техническая поддержка</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Законные интересы (ст. 6(1)(f) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Улучшение и развитие Платформы</li>
                    <li>Аналитика использования и производительности</li>
                    <li>Обеспечение безопасности и предотвращение мошенничества</li>
                    <li>Отправка сервисных уведомлений о работе Платформы</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Согласие (ст. 6(1)(a) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Маркетинговые рассылки и SEO-советы</li>
                    <li>Аналитические и маркетинговые cookies</li>
                    <li>Обработка данных для персонализированных рекомендаций</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Юридическая обязанность (ст. 6(1)(c) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Ведение бухгалтерского и налогового учёта</li>
                    <li>Соблюдение законодательных требований по защите данных</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Передача данных третьим сторонам</h2>
              <p>Для предоставления Услуг мы передаём ваши данные сторонним поставщикам услуг (обработчикам данных). Ниже — категории получателей и конкретные сервисы.</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Инфраструктура и хостинг</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Hetzner Online GmbH</strong> (Германия/ЕС) &mdash; серверная инфраструктура и хранение данных</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">ИИ-сервисы</h3>
                  <p>Платформа использует <strong className="text-white">OpenRouter, Inc.</strong> (США) как единый API-шлюз для доступа к моделям искусственного интеллекта. Через OpenRouter ваш контент может обрабатываться следующими провайдерами:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Anthropic</strong> (США) &mdash; Claude: генерация текста, гуманизация контента</li>
                    <li><strong className="text-white">OpenAI</strong> (США) &mdash; GPT: генерация текста, перевод, эмбеддинги (векторный поиск), генерация изображений</li>
                    <li><strong className="text-white">Google</strong> (США) &mdash; Gemini: генерация текста и изображений</li>
                    <li><strong className="text-white">Meta</strong> (США) &mdash; Llama: генерация текста</li>
                    <li><strong className="text-white">Mistral AI</strong> (Франция/ЕС) &mdash; генерация текста</li>
                    <li><strong className="text-white">Black Forest Labs</strong> (FLUX) &mdash; генерация изображений</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Обнаружение ИИ и качество контента</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">GPTZero</strong> (США) &mdash; проверка текста на ИИ-маркеры</li>
                    <li><strong className="text-white">ZeroGPT</strong> &mdash; альтернативный детектор ИИ-текста</li>
                    <li><strong className="text-white">Winston AI</strong> &mdash; обнаружение ИИ-контента</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Обработка медиа</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Replicate, Inc.</strong> (США) &mdash; повышение разрешения изображений (upscaling)</li>
                    <li><strong className="text-white">Kling AI</strong> &mdash; генерация видео из текста и изображений</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">SEO и анализ контента</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Serpstat</strong> &mdash; исследование ключевых слов, объём поиска, анализ конкурентов</li>
                    <li><strong className="text-white">Jina AI</strong> (Германия/ЕС) &mdash; извлечение текста с веб-страниц для анализа конкурентов</li>
                    <li><strong className="text-white">Tavily</strong> &mdash; веб-поиск и сбор данных для исследований</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Платежи</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Stripe, Inc.</strong> (США) &mdash; обработка платежей, подписки, управление выставлением счетов. Данные карт обрабатываются исключительно Stripe (PCI DSS Level 1) и не хранятся на наших серверах.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Аналитика и маркетинг</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Google Analytics</strong> (Google LLC, США) &mdash; анализ трафика и использования Платформы</li>
                    <li><strong className="text-white">Meta Pixel</strong> (Meta Platforms, Inc., США) &mdash; измерение эффективности рекламы</li>
                    <li><strong className="text-white">Google Ads</strong> (Google LLC, США) &mdash; отслеживание конверсий</li>
                    <li><strong className="text-white">LinkedIn Insight Tag</strong> (LinkedIn Corp., США) &mdash; аналитика рекламных кампаний</li>
                  </ul>
                  <p className="mt-2">Эти сервисы используют cookies. Подробнее — в нашей <Link href="/cookies" className="text-primary hover:underline">Политике cookies</Link>.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Уведомления</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Telegram Bot API</strong> (Telegram FZ-LLC, ОАЭ) &mdash; сервисные уведомления для администраторов Платформы</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Опциональные интеграции (на усмотрение Пользователя)</h3>
                  <p>Перечисленные ниже сервисы активируются только если Пользователь подключает свой собственный API-ключ. В этом случае Пользователь вступает в прямые договорные отношения с соответствующим провайдером:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">DeepL SE</strong> (Германия/ЕС) &mdash; автоматизированный перевод контента</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">Важное замечание о сторонних сервисах</h3>
                <p>Мы передаём сторонним провайдерам только те данные, которые необходимы для выполнения конкретной функции (принцип минимизации данных, ст. 5(1)(c) GDPR). <strong className="text-white">Мы не храним данные от имени сторонних провайдеров и не контролируем их практики обработки данных после передачи данных.</strong></p>
                <p className="mt-2">Каждый сторонний провайдер является самостоятельным контролёром или обработчиком данных и действует в соответствии со своей политикой конфиденциальности. В частности, но не ограничиваясь:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>OpenAI &mdash; <a href="https://openai.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
                  <li>Google &mdash; <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                  <li>Anthropic &mdash; <a href="https://www.anthropic.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
                  <li>Stripe &mdash; <a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                  <li>Meta &mdash; <a href="https://www.facebook.com/privacy/policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                </ul>
                <p className="mt-2"><strong className="text-white">Оператор не несёт ответственности за практики обработки персональных данных сторонними провайдерами</strong> после надлежащей передачи данных в соответствии с условиями DPA. Рекомендуем ознакомиться с их политиками конфиденциальности.</p>
              </div>

              <p className="mt-4">Со всеми обработчиками данных, которым передаются персональные данные, заключены Договоры об обработке данных (DPA) в соответствии со ст. 28 GDPR.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Международная передача данных</h2>
              <p>Некоторые из наших провайдеров расположены за пределами Европейской экономической зоны (ЕЭЗ). В таких случаях мы обеспечиваем надлежащий уровень защиты данных посредством:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Стандартных договорных положений, одобренных Европейской комиссией</li>
                <li>Решений об адекватности, принятых Европейской комиссией</li>
                <li>Дополнительных технических и организационных мер в соответствии с рекомендациями EDPB</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Сроки хранения данных</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Данные Аккаунта:</strong> в течение всего срока существования Аккаунта и 30 дней после его удаления</li>
                <li><strong className="text-white">Платёжные данные:</strong> в соответствии с требованиями налогового законодательства (обычно до 10 лет)</li>
                <li><strong className="text-white">Аналитические данные:</strong> до 26 месяцев</li>
                <li><strong className="text-white">Маркетинговое согласие:</strong> до момента его отзыва</li>
                <li><strong className="text-white">Загруженные файлы:</strong> в течение всего срока существования Аккаунта; удаляются в течение 30 дней после удаления Аккаунта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Ваши права</h2>
              <p>В соответствии с GDPR вы имеете следующие права в отношении ваших персональных данных:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Право доступа</strong> (ст. 15 GDPR) &mdash; получить копию своих персональных данных</li>
                <li><strong className="text-white">Право на исправление</strong> (ст. 16 GDPR) &mdash; исправить неточные или неполные данные</li>
                <li><strong className="text-white">Право на удаление</strong> (ст. 17 GDPR) &mdash; &laquo;право быть забытым&raquo;</li>
                <li><strong className="text-white">Право на ограничение обработки</strong> (ст. 18 GDPR)</li>
                <li><strong className="text-white">Право на перенос данных</strong> (ст. 20 GDPR)</li>
                <li><strong className="text-white">Право на возражение</strong> (ст. 21 GDPR)</li>
                <li><strong className="text-white">Право на отзыв согласия</strong> (ст. 7(3) GDPR)</li>
              </ul>
              <p className="mt-4">Чтобы воспользоваться любым из этих прав, напишите на <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>. Мы ответим в течение 30 дней.</p>
              <p className="mt-3">Вы также имеете право подать жалобу в надзорный орган по защите данных. В Польше это Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-primary hover:underline">uodo.gov.pl</a>. Если вы находитесь в другой стране ЕС, вы можете обратиться в надзорный орган в вашей стране.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Обязанность предоставить данные</h2>
              <p>Предоставление регистрационных данных (имя, email) является необходимым условием для заключения Договора и пользования Платформой. Без этих данных мы не сможем создать Аккаунт и предоставить Услуги.</p>
              <p className="mt-3">Предоставление платёжных данных необходимо для оплаты Подписки. Предоставление данных для маркетинговых коммуникаций является добровольным и не влияет на возможность пользоваться Платформой.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Безопасность данных</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Шифрование данных при передаче (TLS/SSL) и в состоянии покоя</li>
                <li>Регулярное резервное копирование</li>
                <li>Контроль доступа и аутентификация</li>
                <li>Мониторинг безопасности инфраструктуры</li>
                <li>Регулярный пересмотр и обновление мер безопасности</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Автоматизированное принятие решений</h2>
              <p>Платформа использует ИИ для генерации контента, что является её основной функцией. Мы не используем автоматизированное принятие решений или профилирование, имеющие правовые последствия для вас (ст. 22 GDPR).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Данные детей</h2>
              <p>Платформа не предназначена для лиц младше 16 лет. Мы сознательно не собираем данные детей. Если вы узнали, что ребёнок предоставил нам персональные данные, обратитесь по адресу <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Изменения Политики</h2>
              <p>Мы можем обновлять настоящую Политику. О существенных изменениях мы уведомим вас по электронной почте или через интерфейс Платформы. Дата последнего обновления указана вверху этой страницы.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Контакты</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Myicode sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
