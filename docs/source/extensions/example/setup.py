from setuptools import setup

setup(
    name="example",
    version="0.0.0",
    description="Example",
    long_description="",
    long_description_content_type="text/markdown",
    author="udondan",
    author_email="",
    packages=["lib"],
    include_package_data=True,
    url="https://github.com/udondan/iam-floyd",
    license="Apache 2.0",
    python_requires="~=3.6",
    install_requires=["sphinx>=2,<4", "pygments"],
    extras_require={
        "code_style": ["pre-commit==2.6"],
    },
)
