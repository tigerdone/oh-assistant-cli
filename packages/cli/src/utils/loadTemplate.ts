
import { copy } from 'fs-extra';
import { join } from 'path';
import { downloadTemplate } from 'giget';

interface LocalTemplateParams {
  projectName: string;
  templateName: string;
  local?: boolean
}

export const loadLocalTemplate = async(params: Omit<LocalTemplateParams, 'local'>) => {
  const {projectName, templateName} = params;
  const newProjectPath = `${process.cwd()}/${projectName}`;

  copy(
    join(__dirname, `../templates/template-${templateName}`),
    newProjectPath,
    err => {
      if (err) return console.error(err)
      console.log('success!')
    }
  );
}
export const loadRemoteTemplate = async(params: Omit<LocalTemplateParams, 'local'>) => {
  const {projectName} = params;

  const { dir } = await downloadTemplate('https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main', {
    dir: `${process.cwd()}/.temp`
  })

  await copy(dir, join(process.cwd(), projectName))
}

export const loadTemplate = async({projectName,local, templateName}: LocalTemplateParams) => {
  if (local) {
    loadLocalTemplate({projectName, templateName})
  } else {
    loadRemoteTemplate({projectName, templateName})
  }
}
