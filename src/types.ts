import type { ComputedRef } from "vue";
import type { PageName, PageProps } from "./RouteProps";

export const useWelcomePage = () => {
  return {} as ComputedRef<PageProps<'Welcome'>>
}

export const usePageProps = <Page extends PageName>() => {
  type Props = PageProps<Page>

  return {} as { [K in keyof Props]: ComputedRef<Props[K]> }
}
