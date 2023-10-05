const defaultEnvs = {
  hosts: {
    auth: "http://195.49.212.185:8000",
  },
};

export const envs: typeof defaultEnvs = {
  hosts: {
    auth: process.env.NEXT_PUBLIC_HOST_AUTH ?? defaultEnvs.hosts.auth,
  },
};
