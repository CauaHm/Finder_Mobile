*Dependencias*


npm install react-router-dom

React Icons(para icones):
* npm install react-icons --save

FramerMotion(Para as animações):
* npm install motion

*Guia de Organização de Branches*

1.1. Atualize sua branch principal

Antes de criar uma nova feature, garanta que sua branch local (main ou develop) esteja sincronizada com a branch remota.
Bash

* git checkout main
* git pull origin main

1.2. Crie a nova branch

Sempre crie uma nova branch a partir da principal. Nomeie-a de forma descritiva, seguindo a convenção [tipo]/[nome-da-feature], por exemplo: feat/nova-pagina-contato.
Bash

* git checkout -b feat/nova-pagina-contato

1.3. Verifique a branch atual

Use este comando para confirmar que você está na branch correta antes de começar a codificar.
Bash

* git branch

Ótima ideia! Criar um padrão de trabalho com branches é fundamental para evitar problemas em equipe. Segue um guia completo que você pode usar no seu README.md para ajudar o seu time a se organizar.

Guia de Organização de Branches

Este guia serve como um padrão para o fluxo de trabalho com Git. O objetivo é manter o histórico limpo e organizado, facilitando o desenvolvimento e a revisão de código.

1. Criando e Trabalhando em uma Nova Feature

Siga estes passos para começar a trabalhar em uma nova tarefa.

1.1. Atualize sua branch principal

Antes de criar uma nova feature, garanta que sua branch local (main ou develop) esteja sincronizada com a branch remota.

git checkout main
git pull origin main

1.2. Crie a nova branch

Sempre crie uma nova branch a partir da principal. Nomeie-a de forma descritiva, seguindo a convenção [tipo]/[nome-da-feature], por exemplo: feat/nova-pagina-contato.

git checkout -b feat/nova-pagina-contato

1.3. Verifique a branch atual

Use este comando para confirmar que você está na branch correta antes de começar a codificar.

git branch

A branch em que você está será marcada com um asterisco (*).

2. Adicionando e Commitando seu Código

À medida que você desenvolve, adicione e salve suas alterações de forma incremental.

2.1. Adicione os arquivos da nova feature

Adicione somente os arquivos relacionados à sua tarefa. Evite usar git add . para não incluir arquivos que não fazem parte do seu trabalho.

* git add src/components/NewFeature.jsx
* git add src/styles/new-feature.css

Ótima ideia! Criar um padrão de trabalho com branches é fundamental para evitar problemas em equipe. Segue um guia completo que você pode usar no seu README.md para ajudar o seu time a se organizar.

Guia de Organização de Branches

Este guia serve como um padrão para o fluxo de trabalho com Git. O objetivo é manter o histórico limpo e organizado, facilitando o desenvolvimento e a revisão de código.

1. Criando e Trabalhando em uma Nova Feature

Siga estes passos para começar a trabalhar em uma nova tarefa.

1.1. Atualize sua branch principal

Antes de criar uma nova feature, garanta que sua branch local (main ou develop) esteja sincronizada com a branch remota.
Bash

git checkout main
git pull origin main

1.2. Crie a nova branch

Sempre crie uma nova branch a partir da principal. Nomeie-a de forma descritiva, seguindo a convenção [tipo]/[nome-da-feature], por exemplo: feat/nova-pagina-contato.
Bash

git checkout -b feat/nova-pagina-contato

1.3. Verifique a branch atual

Use este comando para confirmar que você está na branch correta antes de começar a codificar.
Bash

git branch

A branch em que você está será marcada com um asterisco (*).

2. Adicionando e Commitando seu Código

À medida que você desenvolve, adicione e salve suas alterações de forma incremental.

2.1. Adicione os arquivos da nova feature

Adicione somente os arquivos relacionados à sua tarefa. Evite usar git add . para não incluir arquivos que não fazem parte do seu trabalho.
Bash

git add src/components/NewFeature.jsx
git add src/styles/new-feature.css

2.2. Commite suas alterações

Crie commits com mensagens claras e objetivas. A primeira linha deve ser um resumo do que foi feito, seguido de uma descrição mais detalhada se necessário.

* git commit -m "feat: Adiciona componente de nova página de contato"

3.1. Faça o push da sua branch

Envie a branch com suas alterações para o repositório remoto.

* git push origin feat/nova-pagina-contato
obs: Caso esse comando nao funcione o proprio git vai te passar o comando correto

Ótima ideia! Criar um padrão de trabalho com branches é fundamental para evitar problemas em equipe. Segue um guia completo que você pode usar no seu README.md para ajudar o seu time a se organizar.

Guia de Organização de Branches

Este guia serve como um padrão para o fluxo de trabalho com Git. O objetivo é manter o histórico limpo e organizado, facilitando o desenvolvimento e a revisão de código.

1. Criando e Trabalhando em uma Nova Feature

Siga estes passos para começar a trabalhar em uma nova tarefa.

1.1. Atualize sua branch principal

Antes de criar uma nova feature, garanta que sua branch local (main ou develop) esteja sincronizada com a branch remota.
Bash

git checkout main
git pull origin main

1.2. Crie a nova branch

Sempre crie uma nova branch a partir da principal. Nomeie-a de forma descritiva, seguindo a convenção [tipo]/[nome-da-feature], por exemplo: feat/nova-pagina-contato.
Bash

git checkout -b feat/nova-pagina-contato

1.3. Verifique a branch atual

Use este comando para confirmar que você está na branch correta antes de começar a codificar.
Bash

git branch

A branch em que você está será marcada com um asterisco (*).

2. Adicionando e Commitando seu Código

À medida que você desenvolve, adicione e salve suas alterações de forma incremental.

2.1. Adicione os arquivos da nova feature

Adicione somente os arquivos relacionados à sua tarefa. Evite usar git add . para não incluir arquivos que não fazem parte do seu trabalho.
Bash

git add src/components/NewFeature.jsx
git add src/styles/new-feature.css

2.2. Commite suas alterações

Crie commits com mensagens claras e objetivas. A primeira linha deve ser um resumo do que foi feito, seguido de uma descrição mais detalhada se necessário.
Bash

git commit -m "feat: Adiciona componente de nova página de contato"

Dica: Siga a convenção de commits: feat (nova funcionalidade), fix (correção de bug), docs (documentação), refactor (refatoração), etc.

3. Enviando e Criando o Pull Request

Quando a feature estiver completa, é hora de enviá-la para revisão.

3.1. Faça o push da sua branch

Envie a branch com suas alterações para o repositório remoto.
Bash

git push origin feat/nova-pagina-contato

3.2. Crie o Pull Request (PR)

Abra o seu repositório no GitHub e crie um Pull Request da sua branch (feat/nova-pagina-contato) para a branch principal (main ou develop). Adicione os revisores e uma descrição detalhada das mudanças.

Ótima ideia! Criar um padrão de trabalho com branches é fundamental para evitar problemas em equipe. Segue um guia completo que você pode usar no seu README.md para ajudar o seu time a se organizar.

Guia de Organização de Branches

Este guia serve como um padrão para o fluxo de trabalho com Git. O objetivo é manter o histórico limpo e organizado, facilitando o desenvolvimento e a revisão de código.

1. Criando e Trabalhando em uma Nova Feature

Siga estes passos para começar a trabalhar em uma nova tarefa.

1.1. Atualize sua branch principal

Antes de criar uma nova feature, garanta que sua branch local (main ou develop) esteja sincronizada com a branch remota.
Bash

git checkout main
git pull origin main

1.2. Crie a nova branch

Sempre crie uma nova branch a partir da principal. Nomeie-a de forma descritiva, seguindo a convenção [tipo]/[nome-da-feature], por exemplo: feat/nova-pagina-contato.
Bash

git checkout -b feat/nova-pagina-contato

1.3. Verifique a branch atual

Use este comando para confirmar que você está na branch correta antes de começar a codificar.
Bash

git branch

A branch em que você está será marcada com um asterisco (*).

2. Adicionando e Commitando seu Código

À medida que você desenvolve, adicione e salve suas alterações de forma incremental.

2.1. Adicione os arquivos da nova feature

Adicione somente os arquivos relacionados à sua tarefa. Evite usar git add . para não incluir arquivos que não fazem parte do seu trabalho.
Bash

git add src/components/NewFeature.jsx
git add src/styles/new-feature.css

2.2. Commite suas alterações

Crie commits com mensagens claras e objetivas. A primeira linha deve ser um resumo do que foi feito, seguido de uma descrição mais detalhada se necessário.
Bash

git commit -m "feat: Adiciona componente de nova página de contato"

Dica: Siga a convenção de commits: feat (nova funcionalidade), fix (correção de bug), docs (documentação), refactor (refatoração), etc.

3. Enviando e Criando o Pull Request

Quando a feature estiver completa, é hora de enviá-la para revisão.

3.1. Faça o push da sua branch

Envie a branch com suas alterações para o repositório remoto.
Bash

git push origin feat/nova-pagina-contato

3.2. Crie o Pull Request (PR)

Abra o seu repositório no GitHub/GitLab/Bitbucket e crie um Pull Request da sua branch (feat/nova-pagina-contato) para a branch principal (main ou develop). Adicione os revisores e uma descrição detalhada das mudanças.

*Resolvendo Conflitos e Feedback no Pull Request*

Se o seu Pull Request for reprovado ou se houver conflitos, siga este passo a passo para fazer as correções.

Passo 1. Volte para a sua branch

Passo 2. Faça as correções necessárias

Passo 3. Faça um novo commit

Passo 4. Force o Push

Como você já tinha um PR em aberto e está adicionando um novo commit, use a flag --force para atualizar o Pull Request.

Aviso: Use o --force com cuidado! Apenas em branches que são exclusivamente suas. Nunca use em branches compartilhadas como main ou develop.

* git push --force-with-lease origin feat/nova-pagina-contato
