export type GeneratedProps = {
  Welcome: Welcome;
  Other: Other;
  // other types here
}

type AuthUser = {
  name: string;
  avatarUrl: string;
  email: string;
}


type WelcomeAuth = {
  user: AuthUser;
}

type Welcome = {
  auth: WelcomeAuth;
  canLogin: boolean;
  canRegister: boolean;
}

type Other = {
  foo: string;
  bar: number;
}

export type PageName = keyof GeneratedProps
export type PageProps<Page extends PageName> = GeneratedProps[Page]
