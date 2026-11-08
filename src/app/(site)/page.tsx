import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const links = [
  {
    title: "Про університет",
    href: "/about",
    desc: "Історія, структура та керівництво",
  },
  {
    title: "Освіта",
    href: "/discipline",
    desc: "Навчальні програми та розклад",
  },
  {
    title: "Наука",
    href: "/science",
    desc: "Дослідження та міжнародна діяльність",
  },
  {
    title: "Оголошення",
    href: "/announcements-all",
    desc: "Новини та події університету",
  },
];

export default function SitePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center justify-center gap-6 py-24 px-6 text-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Глухівський національний педагогічний університет
          <br />
          імені Олександра Довженка
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Освіта, наука та інновації для майбутнього. Ласкаво просимо на
          офіційний сайт університету.
        </p>
        <div className="flex gap-4">
          <Button
            nativeButton={false}
            render={<Link href="/entrants">Вступникам</Link>}
          />
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/student">Студентам</Link>}
          />
        </div>
      </section>

      <section className="grid gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto w-full">
        {links.map((item) => (
          <a key={item.href} href={item.href} className="block">
            <Card className="h-full transition-colors hover:bg-accent">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </a>
        ))}
      </section>
    </main>
  );
}
