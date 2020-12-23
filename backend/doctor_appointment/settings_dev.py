import environ


root = environ.Path(__file__)
env = environ.Env()
environ.Env().read_env()


SITE_ROOT = root()


DEBUG = env.bool("DEBUG", default=False)


SECRET_KEY = env.str("SECRET_KEY")
