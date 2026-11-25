import { AsideCard } from "@/components/layout/site-content/site-aside/aside-card";
import { routes } from "@/config/routes";
import { AsideExternalLink } from "@/components/layout/site-content/site-aside/aside-external-link";
import { AsideInternalLink } from "@/components/layout/site-content/site-aside/aside-internal-link";
import { VideoPlayer } from "@/components/shared/media/video-player";
import { YouTubeEmbed } from "@/components/shared/media/youtube-embed";

export function AsideContent() {
  return (
    <div className="space-y-4">
      <AsideCard title="АРХІВ НОВИН" titleLink={routes.news.archive} />

      <AsideCard
        title="ВСЕУКРАЇНСЬКИЙ КОНКУРС НАУКОВИХ РОБІТ ДЛЯ СТУДЕНТСЬКОЇ МОЛОДІ «ЗДОРОВА
          ДИТИНА – ЗДОРОВА НАЦІЯ»"
      >
        <AsideInternalLink
          href={routes.student.scienceProjectContestZdzn.newsRegulation}
        >
          Положення про конкурс, оголошення
        </AsideInternalLink>

        <AsideInternalLink
          href={routes.student.scienceProjectContestZdzn.registration}
        >
          Реєстрація учасників конкурсу
        </AsideInternalLink>

        <AsideInternalLink href={routes.student.scienceProjectContestZdzn.flow}>
          Перебіг конкурсного відбору
        </AsideInternalLink>
      </AsideCard>

      <AsideCard title="ВСТУПНИКУ">
        <AsideExternalLink href="https://gnpu.edu.ua/pryjmalna-komisiya">
          Новини вступної кампанії 2026 року
        </AsideExternalLink>
        <AsideInternalLink href={routes.entrants.introduction}>
          Information for foreign applicants
        </AsideInternalLink>
        <hr />
        <h3 className="text-center text-base my-2">
          Презентація факультету від здобувачів освіти та випускників
        </h3>
        <VideoPlayer
          src="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fintroductory-campaign.mp4?alt=media"
          poster="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fintroductory-campaign-thumbnail.webp?alt=media"
          title="Презентація факультету від здобувачів освіти та випускників"
        />
        <hr />
        <h3 className="text-center text-base my-2">
          Запрошуємо на навчання за спеціальністю А4 11 Середня освіта Фізична
          культура
        </h3>
        <YouTubeEmbed
          videoId="h4rHVyXehmc"
          poster="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Ffdo-fk-invitation-poster.webp?alt=media"
          title="Запрошуємо на навчання за спеціальністю А4 11 Середня освіта
        Фізична культура"
        />
      </AsideCard>

      <AsideCard title="ЗДОБУВАЧУ ОСВІТИ">
        <AsideExternalLink
          href="http://46.201.250.252:8080/cgi-bin/timetable.cgi"
          title="Розклад занять"
        >
          Розклад занять
        </AsideExternalLink>
        <AsideInternalLink href={routes.discipline.guestLectures}>
          Гостьові лекції
        </AsideInternalLink>
        <AsideExternalLink
          href="https://gnpu.edu.ua/universytet/struktura-universytetu/psyhologichna-sluzhba/"
          title="Психологічна служба"
        >
          Психологічна служба
        </AsideExternalLink>
        <AsideExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSek371v8bKmhriKwdigW9AFpr_-LPdH-t0n1NYK18pKH4WJ7A/viewform?usp=header"
          title="Скринька довіри"
        >
          Скринька довіри
        </AsideExternalLink>
        <AsideInternalLink href={routes.emergency}>
          Алгоритм дій у надзвичайних ситуаціях
        </AsideInternalLink>
      </AsideCard>

      <AsideCard
        title="ВНУТРІШНЯ СИСТЕМА ЗАБЕЗПЕЧЕННЯ ЯКОСТІ ОСВІТИ"
        titleLink={routes.discipline.programs.index}
      >
        <AsideExternalLink
          href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fquality-questionnaries%2Fquestionnaires-for-bachelors-masters.pdf?alt=media"
          title="Анкети для ОС Бакалавр, ОС Магістр (пройти опитування)"
        >
          Анкети для ОС Бакалавр, ОС Магістр (пройти опитування)
        </AsideExternalLink>
        <AsideExternalLink
          href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fquality-questionnaries%2Fquestionnaires-for-phd.pdf?alt=media"
          title="Анкети для ОС Доктор філософії (пройти опитування)"
        >
          Анкети для ОС Доктор філософії (пройти опитування)
        </AsideExternalLink>
        <AsideExternalLink href="#" title="Опитування НПП (пройти опитування)">
          Опитування НПП (пройти опитування)
        </AsideExternalLink>
        <AsideExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5I5La3vz_gtox3-TakLfqywpCeolvNXZJPvM1odIOdwmPYg/viewform"
          title="Опитування  стейкхолдерів (пройти опитування)"
        >
          Опитування стейкхолдерів (пройти опитування)
        </AsideExternalLink>
        <AsideExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSf8YBVHQHNn54jQulIDn3qses-_6V1uhn6R0FI5jJ8M3ICRQA/viewform?pli=1"
          title="Опитування випускників ОПП (пройти опитування)"
        >
          Опитування випускників ОПП (пройти опитування)
        </AsideExternalLink>
      </AsideCard>

      <AsideCard title="СТУДЕНТИ І ВИПУСКНИКИ ПРО ФАКУЛЬТЕТ">
        <AsideInternalLink href={routes.alumni.reviews}>
          Відгуки випускників
        </AsideInternalLink>
        <AsideInternalLink href={routes.alumni.association}>
          Спілка випускників факультету
        </AsideInternalLink>
      </AsideCard>

      <AsideCard title="ЗАПИТИ РОБОТОДАВЦІВ" titleLink={routes.vacancies} />

      <AsideCard title="СТУДЕНТСЬКЕ ЖИТТЯ">
        <AsideInternalLink href={routes.student.localGovernment}>
          Студентське самоврядування
        </AsideInternalLink>
        <AsideInternalLink href={routes.student.starostat}>
          Старостат
        </AsideInternalLink>
        <AsideInternalLink href={routes.student.extracurricular}>
          Позанавчальна робота
        </AsideInternalLink>
        <AsideInternalLink
          href={routes.alumni.warLosses}
          className="relative isolate inline-block px-3 py-1 font-medium before:pointer-events-none before:absolute before:-inset-x-4 before:-inset-y-2 before:-z-10 before:rounded-full before:bg-primary/25 before:blur-md"
        >
          Вони здобували перемогу
        </AsideInternalLink>
        <AsideInternalLink href={routes.alumni.honored}>
          Наша гордість
        </AsideInternalLink>
        <AsideInternalLink href={routes.student.sportsElite}>
          Спортивна еліта університету
        </AsideInternalLink>
      </AsideCard>

      <AsideCard title="ЯК НАС ЗНАЙТИ">
        {/*TODO: map*/}
        <h3 className="bg-amber-200">HERE WILL BE A MAP</h3>
      </AsideCard>
    </div>
  );
}
