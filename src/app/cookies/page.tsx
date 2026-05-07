import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Политика cookies | Draft2Live',
  description: 'Политика cookies Draft2Live: типы cookies, правовые основания, управление согласием и контактная информация.',
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; На главную</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Политика cookies</h1>
          <p className="text-text-muted text-sm mb-12">Последнее обновление: 10 апреля 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Что такое cookies</h2>
              <p>Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете, смартфоне), когда вы посещаете веб-сайты. Они помогают сайту запоминать ваши предпочтения и улучшать работу сервиса.</p>
              <p>Помимо cookies, мы можем использовать аналогичные технологии: пиксельные теги, локальное хранилище (localStorage) и идентификаторы сессии.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Типы cookies, которые мы используем</h2>

              <h3 className="text-white font-medium mt-4 mb-2">Необходимые cookies (всегда активны)</h3>
              <p>Обеспечивают базовый функционал сайта. Без них Платформа не может работать корректно. Эти cookies нельзя отключить.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Поставщик</th>
                      <th className="p-2 border border-border font-semibold text-white">Назначение</th>
                      <th className="p-2 border border-border font-semibold text-white">Срок</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">session_id</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Идентификация сессии пользователя</td>
                      <td className="p-2 border border-border">Сессия</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">csrf_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Защита от CSRF-атак</td>
                      <td className="p-2 border border-border">Сессия</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">auth_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Аутентификация пользователя</td>
                      <td className="p-2 border border-border">30 дней</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">cookie_consent</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Сохранение настроек cookies</td>
                      <td className="p-2 border border-border">6 месяцев</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Аналитические cookies (требуют согласия)</h3>
              <p>Помогают нам понять, как посетители взаимодействуют с Платформой, чтобы мы могли улучшать её работу и удобство.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Поставщик</th>
                      <th className="p-2 border border-border font-semibold text-white">Назначение</th>
                      <th className="p-2 border border-border font-semibold text-white">Срок</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_ga</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Идентификация уникальных посетителей</td>
                      <td className="p-2 border border-border">13 месяцев</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_ga_*</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Analytics 4 &mdash; состояние сессии</td>
                      <td className="p-2 border border-border">13 месяцев</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gid</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Идентификация посетителя в течение суток</td>
                      <td className="p-2 border border-border">24 часа</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Маркетинговые cookies (требуют согласия)</h3>
              <p>Используются для показа релевантной рекламы и измерения эффективности рекламных кампаний.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Поставщик</th>
                      <th className="p-2 border border-border font-semibold text-white">Назначение</th>
                      <th className="p-2 border border-border font-semibold text-white">Срок</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_fbp</td>
                      <td className="p-2 border border-border">Meta</td>
                      <td className="p-2 border border-border">Отслеживание конверсий</td>
                      <td className="p-2 border border-border">3 месяца</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gcl_au</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Ads &mdash; отслеживание конверсий</td>
                      <td className="p-2 border border-border">3 месяца</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">li_sugr</td>
                      <td className="p-2 border border-border">LinkedIn</td>
                      <td className="p-2 border border-border">Insight Tag &mdash; рекламная аналитика</td>
                      <td className="p-2 border border-border">3 месяца</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Правовое основание</h2>
              <p>В соответствии с ePrivacy Directive (2002/58/EC) и GDPR:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Необходимые cookies</strong> устанавливаются без согласия, поскольку они нужны для функционирования Платформы (ст. 6(1)(f) GDPR)</li>
                <li><strong className="text-white">Аналитические и маркетинговые cookies</strong> устанавливаются только после получения вашего явного согласия (ст. 6(1)(a) GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Управление cookies</h2>

              <h3 className="text-white font-medium mt-4 mb-2">4.1. Баннер согласия</h3>
              <p>При первом посещении Платформы вам показывается баннер с запросом согласия. Вы можете принять все cookies, отклонить неосновные или настроить категории вручную. <strong className="text-white">Отказаться от cookies так же просто, как и принять их.</strong> Вы можете изменить свой выбор в любое время в настройках Платформы.</p>
              <p><strong className="text-white">Последствия отказа:</strong> отказ от аналитических и маркетинговых cookies не влияет на функционал Платформы. Вы сможете пользоваться всеми Услугами. Однако мы не сможем персонализировать ваш опыт или показывать релевантную рекламу.</p>

              <h3 className="text-white font-medium mt-4 mb-2">4.2. Настройки браузера</h3>
              <p>Вы можете настроить свой браузер так, чтобы блокировать или удалять cookies. Учтите, что блокировка необходимых cookies может повлиять на работу Платформы.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Chrome:</strong> Настройки &rarr; Конфиденциальность и безопасность &rarr; Cookies</li>
                <li><strong className="text-white">Firefox:</strong> Настройки &rarr; Приватность и безопасность &rarr; Cookies</li>
                <li><strong className="text-white">Safari:</strong> Настройки &rarr; Конфиденциальность &rarr; Cookies</li>
                <li><strong className="text-white">Edge:</strong> Настройки &rarr; Конфиденциальность &rarr; Cookies</li>
              </ul>

              <h3 className="text-white font-medium mt-4 mb-2">4.3. Отказ от аналитики</h3>
              <p>Чтобы отказаться от Google Analytics, вы можете установить официальное расширение браузера: Google Analytics Opt-out Browser Add-on.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Передача данных</h2>
              <p>Некоторые cookies устанавливаются сторонними сервисами, чьи серверы расположены за пределами ЕЭЗ. В таких случаях мы обеспечиваем надлежащий уровень защиты данных в соответствии с GDPR (подробнее — в <Link href="/privacy" className="text-primary hover:underline">Политике конфиденциальности</Link>, раздел 6).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Изменения Политики</h2>
              <p>Срок действия cookies не превышает 13 месяцев в соответствии с рекомендациями EDPB. По истечении этого срока согласие будет запрошено повторно.</p>
              <p>Мы можем обновлять настоящую Политику cookies в случае изменения типов или целей используемых cookies. О существенных изменениях мы уведомим вас через баннер согласия или интерфейс Платформы.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Контакты</h2>
              <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
              <p>Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
              <p>Сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
