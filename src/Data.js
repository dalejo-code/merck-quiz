const Data = {
  ES: {
    CT: {
      DHC: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'Información sobre DHC',
        subtitulo: 'Cuestionario No. 1',
        botonReferencias: 'Referencias',
        gracias: 'Gracias por sus Respuestas',
        preguntas: [
          {
            id: 1,
            respuestaSeleccionada: null,
            pregunta:
              '¿Qué es la deficiencia de la hormona de crecimiento (DHC)?',
            respuestas: [
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
                correcta: true,
                justificacion: 'Correcto.',
              },
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) es una enfermedad autoinmunitaria que impide que el cuerpo produzca insulina (la hormona que regula los niveles de azúcar en sangre).',
                correcta: false,
                justificacion:
                  'No es correcto. La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
              },
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria produce y libera demasiada hormona de crecimiento, por lo que el cuerpo se desarrolla a una tasa que duplica la normal.<sup>1</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
              },
            ],
          },
          {
            id: 2,
            respuestaSeleccionada: null,
            pregunta: '¿Cuáles son los signos y síntomas de DHC?',
            respuestas: [
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen dolor de cabeza, aura y sensibilidad a la luz.',
                correcta: false,
                justificacion:
                  'No es correcto. Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, retraso de la pubertad y masa muscular reducida.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, en algunos casos también retraso de la pubertad, y masa muscular reducida.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Esos son algunos de los signos y síntomas de DHC.',
              },
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura alta, inicio temprano de la pubertad y masa muscular aumentada.',
                correcta: false,
                justificacion:
                  'No es correcto. Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, retraso de la pubertad y masa muscular reducida.<sup>1</sup>',
              },
            ],
          },
          {
            id: 3,
            respuestaSeleccionada: null,
            pregunta:
              'El tratamiento con hormona de crecimiento puede tener efectos positivos sobre otros aspectos del desarrollo de su hijo, en particular, el nivel de energía, la autoestima y el bienestar emocional general.<sup>2</sup>',
            respuestas: [
              {
                respuesta: 'Verdadero',
                correcta: true,
                justificacion:
                  'Correcto. Muchos niños dicen que el tratamiento mejora su bienestar general, además de los síntomas de DHC.<sup>2</sup>',
              },
              {
                respuesta: 'Falso',
                correcta: false,
                justificacion:
                  'No es correcto. El tratamiento puede tener efectos positivos sobre otros aspectos del desarrollo de su hijo, en particular, el nivel de energía, la autoestima y el bienestar emocional general.<sup>2</sup>',
              },
            ],
          },
          {
            id: 4,
            respuestaSeleccionada: null,
            pregunta:
              '¿Cómo se maneja la DHC? Elija todas las respuestas que correspondan.',
            respuestas: [
              {
                respuesta:
                  'Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien',
                correcta: true,
                justificacion:
                  'Correcto. Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien y seguir el tratamiento tal como está indicado contribuyen al manejo de la DHC.<sup>3</sup>',
              },
              {
                respuesta:
                  'No olvidarse de seguir el tratamiento tal como está indicado',
                correcta: true,
                justificacion:
                  'Correcto. Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien y seguir el tratamiento tal como está indicado contribuyen al manejo de la DHC.<sup>3</sup>',
              },
              {
                respuesta:
                  'No prestar atención a los síntomas y desear que pronto desaparezcan',
                correcta: false,
                justificacion:
                  'No es correcto. No prestar atención a los síntomas no los hará desaparecer. Hable con el médico sobre las cosas que puede hacer para manejar mejor sus síntomas.',
              },
            ],
          },
          {
            id: 5,
            respuestaSeleccionada: null,
            pregunta:
              '¿Qué beneficios puede esperar para su hijo con el tratamiento de DHC?',
            respuestas: [
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento tendrán más fuerza muscular y mejor rendimiento atlético cuando sean adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. No se ha demostrado que el tratamiento tenga algún efecto sobre la fuerza muscular o el rendimiento atlético.',
              },
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento tienen garantizado que serán altos cuando sean adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. El tratamiento no garantiza que el niño será alto cuando sea adulto.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento suelen alcanzar una estatura normal en la adultez, siempre y cuando tengan un diagnóstico temprano que permita el crecimiento compensatorio.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Si su hijo tuvo un diagnóstico temprano, es probable que alcance una estatura normal en la adultez.<sup>1</sup>',
              },
            ],
          },
          {
            id: 6,
            respuestaSeleccionada: null,
            pregunta:
              '¿Dónde puedo encontrar más información sobre DHC?<sup>4</sup>',
            respuestas: [
              {
                respuesta: 'Hablar con el médico',
                correcta: false,
                justificacion:
                  'No es correcto. También puede obtener información útil si habla con su equipo de salud.',
              },
              {
                respuesta:
                  'Visitar páginas web confiables, por ejemplo, las que le recomiende el médico o las que estén avaladas por una organización especializada en crecimiento',
                correcta: true,
                justificacion:
                  'Correcto. Puede obtener información útil de las dos fuentes.',
              },
              {
                respuesta: 'Todas las anteriores',
                correcta: false,
                justificacion:
                  'No es correcto. También puede obtener información útil en páginas web confiables.',
              },
            ],
          },
        ],
        referencias: [
          '<sup>1</sup> Growth hormone deficiency [Internet]. NHS; [consultado el 3 de junio de 2023]. Disponible en: <a href="https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/growth-hormone-deficiency/">https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/growth-hormone-deficiency/</a>',

          '<sup>2</sup> Marini MG, Chesi P, Mazzanti L, Guazzarotti L, Toni TD, Salerno MC, Officioso A, Parpagnoli M, Angeletti C, Faienza MF, Iezzi ML. Stories of experiences of care for growth hormone deficiency: the CRESCERE project. Future Science OA. 2016 Mar;2(1).',

          '<sup>3</sup> Growth disorders [Internet]. London Endocrine Centre; [consultado el 3 de junio de 2023]. Disponible en: <a href="http://www.londonendocrinecentre.co.uk/growth-disorders.html">http://www.londonendocrinecentre.co.uk/growth-disorders.html</a>',

          '<sup>4</sup> Merck, Página de pacientes regional, disponible en: <a href="https://psp.merckgroup.com/">https://psp.merckgroup.com/</a>',
        ],
        disclaimer: {
          inicio:
            'Este material fue diseñado como actividad complementaria que usted podrá realizar con el fin de reforzar la información recibida sobre Tuitek. ¡Esperamos sea de ayuda! Usted es el dueño de todas las respuestas que otorgue y que decida compartir por sus propios medios. Le sugerimos descargar el documento para que pueda realizar la actividad y luego guardarlo para tenerlo a mano cuando lo quiera consultar.',
          final: `CT-SAI-00129, Sep/2023 La información aquí contenida o cualquier información adicional brindada por el Programa de Soporte a Pacientes de Merck no sustituye en ningún caso el consejo médico. Ante cualquier duda sobre su condición, tratamiento y/o el contenido de este material consulte a su médico. Para uso exclusivo a pacientes de PSP. Prohibida su reproducción total o parcial.
          <br>[2023] MERCK S.A. || © Todos los derechos reservados. 12 Avenida 0-33, Zona 2 de Mixco, Código Postal 01057, Ciudad de Guatemala.`,
        },
      },
      SAIZEN: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'Información sobre Saizen®',
        subtitulo: 'Cuestionario No. 2',
        botonReferencias: 'Referencias',
        gracias: 'Gracias por sus Respuestas',
        preguntas: [
          {
            pregunta: '¿Qué es Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Saizen® es una hormona de crecimiento. La acción principal de Saizen® es estimular el crecimiento en niños y adolescentes.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Saizen® es una hormona de crecimiento cuya acción es estimular el crecimiento en niños y adolescentes.<sup>1</sup>',
              },
              {
                respuesta:
                  'Saizen® es una hormona que detiene el crecimiento en niños y adolescentes.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una hormona de crecimiento indicada para el tratamiento de niños y adultos con deficiencia de la hormona de crecimiento.<sup>1</sup>',
              },
              {
                respuesta:
                  'Saizen® es un medicamento recetado que previene las migrañas en niños y adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una hormona de crecimiento indicada para el tratamiento de niños y adultos con deficiencia de la hormona de crecimiento.<sup>1</sup>',
              },
            ],
          },
          {
            pregunta: '¿Cómo se usa Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Saizen® es un comprimido que se toma una vez al día.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.',
              },
              {
                respuesta:
                  'Saizen® es una inyección que se aplica una vez al mes.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.',
              },
              {
                respuesta:
                  'Saizen® es una inyección subcutánea que se aplica una vez al día.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.<sup>1</sup>',
              },
            ],
          },
          {
            pregunta: '¿Qué efectos adversos tiene?',
            respuestas: [
              {
                respuesta:
                  'Los efectos adversos más comunes de Saizen® son las reacciones en el sitio de inyección, por ejemplo, dolor, enrojecimiento e hinchazón.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los efectos adversos comunes de Saizen® son la falta de apetito y el descenso de peso.<sup>1</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.<sup>1</sup>',
              },
              {
                respuesta: 'Se desconocen los efectos adversos de Saizen®.',
                correcta: false,
                justificacion:
                  'No es correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.',
              },
            ],
          },
          {
            pregunta:
              'Si se saltean inyecciones de Saizen® repetidamente, el crecimiento se verá afectado.<sup>5</sup>',
            respuestas: [
              {
                respuesta: 'Verdadero',
                correcta: true,
                justificacion:
                  'Correcto. Hable con el médico de su hijo si se han salteado inyecciones repetidamente.<sup>5</sup>',
              },
              {
                respuesta: 'Falso',
                correcta: false,
                justificacion:
                  'No es correcto. Hable con el médico de su hijo si se han salteado inyecciones repetidamente.<sup>5</sup>',
              },
            ],
          },
          {
            pregunta:
              '¿Qué puede hacer si su hijo siente dolor en el sitio de inyección?',
            respuestas: [
              {
                respuesta:
                  'Aplicar una compresa fría en el sitio de inyección. Eso puede reducir el dolor.<sup>2</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. También puede aplicar una compresa fría en el sitio de inyección para reducir la inflamación y el dolor.<sup>3</sup>',
              },
              {
                respuesta:
                  'Distraer al niño con algún juguete o una actividad que le guste. Eso puede ayudarlos a olvidarse un poco del dolor.<sup>3</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. También se puede usar la distracción para que el niño se olvide un poco del dolor.<sup>4</sup>',
              },
              {
                respuesta: 'Todas las anteriores.',
                correcta: true,
                justificacion: 'Correcto.',
              },
            ],
          },
          {
            pregunta: '¿Cuánto tiempo debe recibir Saizen® su hijo?',
            respuestas: [
              {
                respuesta:
                  'Su hijo debe recibir tratamiento durante el resto de su vida y tiene que seguir bajo evaluación médica.',
                correcta: false,
                justificacion:
                  'No es correcto. Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico.<sup>1</sup> No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
              {
                respuesta:
                  'Su hijo puede abandonar el tratamiento cuando sienta que ha alcanzado una estatura satisfactoria.',
                correcta: false,
                justificacion:
                  'No es correcto. Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico.<sup>1</sup> No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
              {
                respuesta:
                  'Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico, o a causa de otras razones si es necesario.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
            ],
          },
        ],
        referencias: [
          '<sup>1</sup> Saizen 5.83 mg/ml solution for injection in cartridge - Summary of Product Characteristics (SmPC) - (emc)',

          '<sup>2</sup> Dealing with Injection Site Pain [Internet]. NHS; [consultado el 3 de junio de 2023]. Disponible en: <a href="https://www.porthosp.nhs.uk/departments/rheumatology/dealing-with-injection-site-pain.htm">https://www.porthosp.nhs.uk/departments/rheumatology/dealing-with-injection-site-pain.htm</a>',

          '<sup>3</sup> Distraction [Internet]. NHS; 2020 [consultado el 1 de junio de 2023]. Disponible en: <a href="https://www.gosh.nhs.uk/conditions-and-treatments/procedures-and-treatments/distraction/">https://www.gosh.nhs.uk/conditions-and-treatments/procedures-and-treatments/distraction/</a>',

          '<sup>4</sup> Taddio A, Appleton M, Bortolussi R, Chambers C, Dubey V, Halperin S, Hanrahan A, Ipp M, Lockett D, MacDonald N, Midmer D. Reducing the pain of childhood vaccination: an evidence-based clinical practice guideline. Cmaj. 2010 Dec 14;182(18):E843-55.',

          '<sup>5</sup> Van Dommelen P, Koledova E, Wit JM. Effect of adherence to growth hormone treatment on 0–2 year catch-up growth in children with growth hormone deficiency. PloS one. 2018 Oct 24;13(10):e0206009.',
        ],
        disclaimer: {
          inicio:
            'Este material fue diseñado como actividad complementaria que usted podrá realizar con el fin de reforzar la información recibida sobre Tuitek. ¡Esperamos sea de ayuda! Usted es el dueño de todas las respuestas que otorgue y que decida compartir por sus propios medios. Le sugerimos descargar el documento para que pueda realizar la actividad y luego guardarlo para tenerlo a mano cuando lo quiera consultar.',
          final: `CT-SAI-00129, Sep/2023 La información aquí contenida o cualquier información adicional brindada por el Programa de Soporte a Pacientes de Merck no sustituye en ningún caso el consejo médico. Ante cualquier duda sobre su condición, tratamiento y/o el contenido de este material consulte a su médico. Para uso exclusivo a pacientes de PSP. Prohibida su reproducción total o parcial.
          <br>[2023] MERCK S.A. || © Todos los derechos reservados. 12 Avenida 0-33, Zona 2 de Mixco, Código Postal 01057, Ciudad de Guatemala.`,
        },
      },
    },
    ST: {
      DHC: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'Información sobre DHC',
        subtitulo: 'Cuestionario No. 1',
        botonReferencias: 'Referencias',
        gracias: 'Gracias por sus Respuestas',
        preguntas: [
          {
            id: 1,
            respuestaSeleccionada: null,
            pregunta:
              '¿Qué es la deficiencia de la hormona de crecimiento (DHC)?',
            respuestas: [
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
                correcta: true,
                justificacion: 'Correcto.',
              },
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) es una enfermedad autoinmunitaria que impide que el cuerpo produzca insulina (la hormona que regula los niveles de azúcar en sangre).',
                correcta: false,
                justificacion:
                  'No es correcto. La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
              },
              {
                respuesta:
                  'La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria produce y libera demasiada hormona de crecimiento, por lo que el cuerpo se desarrolla a una tasa que duplica la normal.<sup>1</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. La deficiencia de la hormona de crecimiento (DHC) ocurre cuando la glándula pituitaria no produce ni libera la cantidad suficiente de hormona de crecimiento para que el cuerpo se desarrolle a una tasa normal.<sup>1</sup>',
              },
            ],
          },
          {
            id: 2,
            respuestaSeleccionada: null,
            pregunta: '¿Cuáles son los signos y síntomas de DHC?',
            respuestas: [
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen dolor de cabeza, aura y sensibilidad a la luz.',
                correcta: false,
                justificacion:
                  'No es correcto. Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, retraso de la pubertad y masa muscular reducida.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, en algunos casos también retraso de la pubertad, y masa muscular reducida.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Esos son algunos de los signos y síntomas de DHC.',
              },
              {
                respuesta:
                  'Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura alta, inicio temprano de la pubertad y masa muscular aumentada.',
                correcta: false,
                justificacion:
                  'No es correcto. Los síntomas de la deficiencia de la hormona de crecimiento incluyen estatura baja, retraso de la pubertad y masa muscular reducida.<sup>1</sup>',
              },
            ],
          },
          {
            id: 3,
            respuestaSeleccionada: null,
            pregunta:
              'El tratamiento con hormona de crecimiento puede tener efectos positivos sobre otros aspectos del desarrollo de su hijo, en particular, el nivel de energía, la autoestima y el bienestar emocional general.<sup>2</sup>',
            respuestas: [
              {
                respuesta: 'Verdadero',
                correcta: true,
                justificacion:
                  'Correcto. Muchos niños dicen que el tratamiento mejora su bienestar general, además de los síntomas de DHC.<sup>2</sup>',
              },
              {
                respuesta: 'Falso',
                correcta: false,
                justificacion:
                  'No es correcto. El tratamiento puede tener efectos positivos sobre otros aspectos del desarrollo de su hijo, en particular, el nivel de energía, la autoestima y el bienestar emocional general.<sup>2</sup>',
              },
            ],
          },
          {
            id: 4,
            respuestaSeleccionada: null,
            pregunta:
              '¿Cómo se maneja la DHC? Elija todas las respuestas que correspondan.',
            respuestas: [
              {
                respuesta:
                  'Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien',
                correcta: true,
                justificacion:
                  'Correcto. Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien y seguir el tratamiento tal como está indicado contribuyen al manejo de la DHC.<sup>3</sup>',
              },
              {
                respuesta:
                  'No olvidarse de seguir el tratamiento tal como está indicado',
                correcta: true,
                justificacion:
                  'Correcto. Seguir una dieta equilibrada, hacer ejercicio regularmente, dormir bien y seguir el tratamiento tal como está indicado contribuyen al manejo de la DHC.<sup>3</sup>',
              },
              {
                respuesta:
                  'No prestar atención a los síntomas y desear que pronto desaparezcan',
                correcta: false,
                justificacion:
                  'No es correcto. No prestar atención a los síntomas no los hará desaparecer. Hable con el médico sobre las cosas que puede hacer para manejar mejor sus síntomas.',
              },
            ],
          },
          {
            id: 5,
            respuestaSeleccionada: null,
            pregunta:
              '¿Qué beneficios puede esperar para su hijo con el tratamiento de DHC?',
            respuestas: [
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento tendrán más fuerza muscular y mejor rendimiento atlético cuando sean adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. No se ha demostrado que el tratamiento tenga algún efecto sobre la fuerza muscular o el rendimiento atlético.',
              },
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento tienen garantizado que serán altos cuando sean adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. El tratamiento no garantiza que el niño será alto cuando sea adulto.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los niños con DHC que reciben tratamiento suelen alcanzar una estatura normal en la adultez, siempre y cuando tengan un diagnóstico temprano que permita el crecimiento compensatorio.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Si su hijo tuvo un diagnóstico temprano, es probable que alcance una estatura normal en la adultez.<sup>1</sup>',
              },
            ],
          },
          {
            id: 6,
            respuestaSeleccionada: null,
            pregunta:
              '¿Dónde puedo encontrar más información sobre DHC?<sup>4</sup>',
            respuestas: [
              {
                respuesta: 'Hablar con el médico',
                correcta: false,
                justificacion:
                  'No es correcto. También puede obtener información útil si habla con su equipo de salud.',
              },
              {
                respuesta:
                  'Visitar páginas web confiables, por ejemplo, las que le recomiende el médico o las que estén avaladas por una organización especializada en crecimiento',
                correcta: true,
                justificacion:
                  'Correcto. Puede obtener información útil de las dos fuentes.',
              },
              {
                respuesta: 'Todas las anteriores',
                correcta: false,
                justificacion:
                  'No es correcto. También puede obtener información útil en páginas web confiables.',
              },
            ],
          },
        ],
        referencias: [
          '<sup>1</sup> Growth hormone deficiency [Internet]. NHS; [consultado el 3 de junio de 2023]. Disponible en: <a href="https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/growth-hormone-deficiency/">https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/growth-hormone-deficiency/</a>',

          '<sup>2</sup> Marini MG, Chesi P, Mazzanti L, Guazzarotti L, Toni TD, Salerno MC, Officioso A, Parpagnoli M, Angeletti C, Faienza MF, Iezzi ML. Stories of experiences of care for growth hormone deficiency: the CRESCERE project. Future Science OA. 2016 Mar;2(1).',

          '<sup>3</sup> Growth disorders [Internet]. London Endocrine Centre; [consultado el 3 de junio de 2023]. Disponible en: <a href="http://www.londonendocrinecentre.co.uk/growth-disorders.html">http://www.londonendocrinecentre.co.uk/growth-disorders.html</a>',

          '<sup>4</sup> Merck, Página de pacientes regional, disponible en: <a href="https://psp.merckgroup.com/">https://psp.merckgroup.com/</a>',
        ],
        disclaimer: {
          inicio:
            'Este material fue diseñado como actividad complementaria que usted podrá realizar con el fin de reforzar la información recibida sobre Tuitek. ¡Esperamos sea de ayuda! Usted es el dueño de todas las respuestas que otorgue y que decida compartir por sus propios medios. Le sugerimos descargar el documento para que pueda realizar la actividad y luego guardarlo para tenerlo a mano cuando lo quiera consultar.',
          final: `RL-SAI-00008, Sep/23. La información aquí contenida o cualquier información adicional brindada por el Programa de Soporte a Pacientes de Merck no sustituye en ningún caso el consejo médico. Ante cualquier duda sobre su condición, tratamiento y/o el contenido de este material consulte a su médico. Para uso exclusivo a pacientes de PSP. Prohibida su reproducción total o parcial. <br> [2023] MERCK KGaA || © Todos los derechos reservados.`,
        },
      },
      SAIZEN: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'Información sobre Saizen®',
        subtitulo: 'Cuestionario No. 2',
        botonReferencias: 'Referencias',
        gracias: 'Gracias por sus Respuestas',
        preguntas: [
          {
            pregunta: 'Pregunta 1: ¿Qué es Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Saizen® es una hormona de crecimiento. La acción principal de Saizen® es estimular el crecimiento en niños y adolescentes.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Saizen® es una hormona de crecimiento cuya acción es estimular el crecimiento en niños y adolescentes.<sup>1</sup>',
              },
              {
                respuesta:
                  'Saizen® es una hormona que detiene el crecimiento en niños y adolescentes.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una hormona de crecimiento indicada para el tratamiento de niños y adultos con deficiencia de la hormona de crecimiento.<sup>1</sup>',
              },
              {
                respuesta:
                  'Saizen® es un medicamento recetado que previene las migrañas en niños y adultos.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una hormona de crecimiento indicada para el tratamiento de niños y adultos con deficiencia de la hormona de crecimiento.<sup>1</sup>',
              },
            ],
          },
          {
            pregunta: 'Pregunta 2: ¿Cómo se usa Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Saizen® es un comprimido que se toma una vez al día.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.',
              },
              {
                respuesta:
                  'Saizen® es una inyección que se aplica una vez al mes.',
                correcta: false,
                justificacion:
                  'No es correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.',
              },
              {
                respuesta:
                  'Saizen® es una inyección subcutánea que se aplica una vez al día.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Saizen® es una inyección subcutánea que se aplica una vez al día.<sup>1</sup>',
              },
            ],
          },
          {
            pregunta: 'Pregunta 3: ¿Qué efectos adversos tiene?',
            respuestas: [
              {
                respuesta:
                  'Los efectos adversos más comunes de Saizen® son las reacciones en el sitio de inyección, por ejemplo, dolor, enrojecimiento e hinchazón.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.<sup>1</sup>',
              },
              {
                respuesta:
                  'Los efectos adversos comunes de Saizen® son la falta de apetito y el descenso de peso.<sup>1</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.<sup>1</sup>',
              },
              {
                respuesta: 'Se desconocen los efectos adversos de Saizen®.',
                correcta: false,
                justificacion:
                  'No es correcto. Debe informar al médico si observa algún efecto adverso que le preocupe, además de cualquier efecto adverso que no se mencione en el folleto de información para el paciente.',
              },
            ],
          },
          {
            pregunta:
              'Pregunta 4: Si se saltean inyecciones de Saizen® repetidamente, el crecimiento se verá afectado.<sup>5</sup>',
            respuestas: [
              {
                respuesta: 'Verdadero',
                correcta: true,
                justificacion:
                  'Correcto. Hable con el médico de su hijo si se han salteado inyecciones repetidamente.<sup>5</sup>',
              },
              {
                respuesta: 'Falso',
                correcta: false,
                justificacion:
                  'No es correcto. Hable con el médico de su hijo si se han salteado inyecciones repetidamente.<sup>5</sup>',
              },
            ],
          },
          {
            pregunta:
              'Pregunta 5: ¿Qué puede hacer si su hijo siente dolor en el sitio de inyección?',
            respuestas: [
              {
                respuesta:
                  'Aplicar una compresa fría en el sitio de inyección. Eso puede reducir el dolor.<sup>2</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. También puede aplicar una compresa fría en el sitio de inyección para reducir la inflamación y el dolor.<sup>3</sup>',
              },
              {
                respuesta:
                  'Distraer al niño con algún juguete o una actividad que le guste. Eso puede ayudarlos a olvidarse un poco del dolor.<sup>3</sup>',
                correcta: false,
                justificacion:
                  'No es correcto. También se puede usar la distracción para que el niño se olvide un poco del dolor.<sup>4</sup>',
              },
              {
                respuesta: 'Todas las anteriores.',
                correcta: true,
                justificacion: 'Correcto.',
              },
            ],
          },
          {
            pregunta:
              'Pregunta 6: ¿Cuánto tiempo debe recibir Saizen® su hijo?',
            respuestas: [
              {
                respuesta:
                  'Su hijo debe recibir tratamiento durante el resto de su vida y tiene que seguir bajo evaluación médica.',
                correcta: false,
                justificacion:
                  'No es correcto. Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico.<sup>1</sup> No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
              {
                respuesta:
                  'Su hijo puede abandonar el tratamiento cuando sienta que ha alcanzado una estatura satisfactoria.',
                correcta: false,
                justificacion:
                  'No es correcto. Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico.<sup>1</sup> No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
              {
                respuesta:
                  'Su hijo debe abandonar el tratamiento cuando alcance una estatura adulta satisfactoria, según el criterio del médico, o a causa de otras razones si es necesario.<sup>1</sup>',
                correcta: true,
                justificacion:
                  'Correcto. No debe suspender la administración de Saizen® sin antes hablar con el médico de su hijo. Si tiene más preguntas sobre el uso de este medicamento, consulte con el médico de su hijo o con el farmacéutico.',
              },
            ],
          },
        ],
        referencias: [
          '<sup>1</sup> Saizen 5.83 mg/ml solution for injection in cartridge - Summary of Product Characteristics (SmPC) - (emc)',

          '<sup>2</sup> Dealing with Injection Site Pain [Internet]. NHS; [consultado el 3 de junio de 2023]. Disponible en: <a href="https://www.porthosp.nhs.uk/departments/rheumatology/dealing-with-injection-site-pain.htm">https://www.porthosp.nhs.uk/departments/rheumatology/dealing-with-injection-site-pain.htm</a>',

          '<sup>3</sup> Distraction [Internet]. NHS; 2020 [consultado el 1 de junio de 2023]. Disponible en: <a href="https://www.gosh.nhs.uk/conditions-and-treatments/procedures-and-treatments/distraction/">https://www.gosh.nhs.uk/conditions-and-treatments/procedures-and-treatments/distraction/</a>',

          '<sup>4</sup> Taddio A, Appleton M, Bortolussi R, Chambers C, Dubey V, Halperin S, Hanrahan A, Ipp M, Lockett D, MacDonald N, Midmer D. Reducing the pain of childhood vaccination: an evidence-based clinical practice guideline. Cmaj. 2010 Dec 14;182(18):E843-55.',

          '<sup>5</sup> Van Dommelen P, Koledova E, Wit JM. Effect of adherence to growth hormone treatment on 0–2 year catch-up growth in children with growth hormone deficiency. PloS one. 2018 Oct 24;13(10):e0206009.',
        ],
        disclaimer: {
          inicio:
            'Este material fue diseñado como actividad complementaria que usted podrá realizar con el fin de reforzar la información recibida sobre Tuitek. ¡Esperamos sea de ayuda! Usted es el dueño de todas las respuestas que otorgue y que decida compartir por sus propios medios. Le sugerimos descargar el documento para que pueda realizar la actividad y luego guardarlo para tenerlo a mano cuando lo quiera consultar.',
          final: `RL-SAI-00008, Sep/23. La información aquí contenida o cualquier información adicional brindada por el Programa de Soporte a Pacientes de Merck no sustituye en ningún caso el consejo médico. Ante cualquier duda sobre su condición, tratamiento y/o el contenido de este material consulte a su médico. Para uso exclusivo a pacientes de PSP. Prohibida su reproducción total o parcial.
          <br>[2023] MERCK KGaA || © Todos los derechos reservados.`,
        },
      },
    },
  },
  PT: {
    ST: {
      DHC: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'DHC: os fatos',
        subtitulo: 'Quiz No. 1',
        botonReferencias: 'Referências',
        gracias: 'Obrigado por suas respostas',
        preguntas: [
          {
            id: 1,
            respuestaSeleccionada: null,
            pregunta: 'O que é a deficiência de hormônio do crescimento (DHC)?',
            respuestas: [
              {
                respuesta:
                  'A deficiência do hormônio do crescimento (DHC) ocorre quando a glândula pituitária não consegue produzir e liberar hormônio do crescimento suficiente para que o corpo se desenvolva em uma taxa normal.<sup>1</sup>',
                correcta: true,
                justificacion: 'Correto.',
              },
              {
                respuesta:
                  'A deficiência do hormônio do crescimento (DHC) é uma doença autoimune que faz com que o corpo pare de produzir insulina, um hormônio que regula os níveis da glicemia.',
                correcta: false,
                justificacion:
                  'Isto não está correto. A deficiência do hormônio do crescimento (DHC) ocorre quando a glândula pituitária não consegue produzir e liberar hormônio do crescimento suficiente para que o corpo se desenvolva em uma taxa normal.',
              },
              {
                respuesta:
                  'A deficiência do hormônio do crescimento (DHC) ocorre quando a glândula pituitária produz e libera muito hormônio do crescimento para que o corpo se desenvolva no dobro da taxa normal.',
                correcta: false,
                justificacion:
                  'Isto não está correto. A deficiência do hormônio do crescimento (DHC) ocorre quando a glândula pituitária não consegue produzir e liberar hormônio do crescimento suficiente para que o corpo se desenvolva em uma taxa normal.',
              },
            ],
          },
          {
            id: 2,
            respuestaSeleccionada: null,
            pregunta: 'Quais são os sinais e sintomas de DHC?',
            respuestas: [
              {
                respuesta:
                  'Alguns sintomas de deficiência de hormônio do crescimento em crianças incluem dores de cabeça, aura e sensibilidade à luz.',
                correcta: false,
                justificacion:
                  'Isto não está correto, alguns dos sintomas da deficiência do hormônio do crescimento em crianças incluem baixa estatura, puberdade atrasada e baixa massa muscular.',
              },
              {
                respuesta:
                  'Alguns sintomas da deficiência de hormônio do crescimento em crianças incluem baixa estatura e, em alguns casos, puberdade atrasada e baixa massa muscular.',
                correcta: true,
                justificacion:
                  'Correto, estes são alguns dos sinais e sintomas.',
              },
              {
                respuesta:
                  'Alguns sintomas da deficiência de hormônio do crescimento em crianças incluem alta estatura, puberdade prematura e alta massa muscular.',
                correcta: false,
                justificacion:
                  'Isto não está correto, alguns dos sintomas da deficiência do hormônio do crescimento em crianças incluem baixa estatura, puberdade atrasada e baixa massa muscular.',
              },
            ],
          },
          {
            id: 3,
            respuestaSeleccionada: null,
            pregunta:
              'O tratamento com hormônio do crescimento pode contribuir para outros aspectos do desenvolvimento de seu filho, especificamente, níveis de energia, autoestima e bem-estar emocional geral.',
            respuestas: [
              {
                respuesta: 'Verdadeiro.',
                correcta: true,
                justificacion:
                  'Correto. Muitas crianças acham que o tratamento as ajuda a ter um bem-estar geral melhor, não apenas com os sintomas da DHC.',
              },
              {
                respuesta: 'Falso.',
                correcta: false,
                justificacion:
                  'Isto não está correto. O tratamento pode contribuir para outros aspectos do desenvolvimento do seu filho, especificamente, níveis de energia, autoestima e bem-estar emocional geral.',
              },
            ],
          },
          {
            id: 4,
            respuestaSeleccionada: null,
            pregunta: 'Como a DHC é tratada? Marque todos os que se aplicam.',
            respuestas: [
              {
                respuesta:
                  'Comer uma dieta balanceada, exercícios regulares, sono de boa qualidade.',
                correcta: true,
                justificacion:
                  '1./2. Correto. Comer uma dieta balanceada, fazer exercícios regularmente e sono de qualidade, bem como administrar o tratamento conforme prescrito, tudo isso ajudará a controlar a DHC.',
              },
              {
                respuesta:
                  'Lembrar de administrar o tratamento conforme prescrito.',
                correcta: true,
                justificacion:
                  '1./2. Correto. Comer uma dieta balanceada, fazer exercícios regularmente e sono de qualidade, bem como administrar o tratamento conforme prescrito, tudo isso ajudará a controlar a DHC.',
              },
              {
                respuesta:
                  'Ignorando os sintomas, esperando que eles desapareçam.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Ignorar seus sintomas não os ajudará a desaparecer. Fale com o seu profissional de saúde sobre o que pode fazer para tratar de forma eficaz os seus sintomas.',
              },
            ],
          },
          {
            id: 5,
            respuestaSeleccionada: null,
            pregunta:
              'Como você pode esperar que seu filho se beneficie do tratamento para DHC?',
            respuestas: [
              {
                respuesta:
                  'As crianças com DHC tratadas terão maior força muscular e desempenho atlético quando adultos.',
                correcta: false,
                justificacion:
                  'Isto não está correto. o aumento da força muscular e da capacidade atlética não é conhecido por ocorrer a partir do tratamento.',
              },
              {
                respuesta:
                  'As crianças com DHC tratadas têm a garantia de serem altas quando adultas.',
                correcta: false,
                justificacion:
                  'Isto não está correto. O tratamento não garante que seu filho será alto quando adulto.',
              },
              {
                respuesta:
                  'As crianças com DHC que são tratadas geralmente alcançam uma altura adulta normal, desde que sejam diagnosticadas cedo o suficiente para permitir o crescimento “recuperado”.',
                correcta: true,
                justificacion:
                  'Correto. Se seu filho foi diagnosticado cedo o suficiente, é provável que ele alcance uma altura adulta normal.',
              },
            ],
          },
          {
            id: 6,
            respuestaSeleccionada: null,
            pregunta: 'Onde posso obter mais informações sobre DHC?',
            respuestas: [
              {
                respuesta: 'Converse com seu médico.',
                correcta: false,
                justificacion:
                  'Isto não está completamente correto, você também pode obter informações úteis de sites confiáveis.',
              },
              {
                respuesta:
                  'Visite um site confiável, por exemplo, recomendado pelo seu médico ou endossado por uma organização com experiência em crescimento.',
                correcta: true,
                justificacion:
                  'Correto, você pode encontrar informações úteis nessas duas fontes.',
              },
              {
                respuesta: 'Todos os itens acima.',
                correcta: false,
                justificacion:
                  'Isto não está completamente correto, você também pode obter informações úteis de sua equipe de assistência à saúde.',
              },
            ],
          },
        ],
        referencias: [],
        disclaimer: {
          inicio:
            'Este material foi concebido como uma atividade complementar que você pode realizar para reforçar as informações recebidas sobre a Tuitek. Esperamos que ajude! Você é o dono de todas as respostas que dá e que decide compartilhar por seus próprios meios. Sugerimos que faça o download do documento para realizar a atividade e depois guarde-o para o ter à mão quando o quiser consultar.',
          final: `BR-SAI-00414, Set/23. As informações incluídas aqui ou qualquer informação adicional fornecida pelo Programa de Suporte ao Paciente da Merck não substituem de forma alguma os conselhos médicos. Em caso de alguma dúvida sobre sua condição, tratamento e/ou o conteúdo deste material, consulte seu médico. Para uso exclusivo dos pacientes do PSP. Proibida sua reprodução total ou parcial.
        <br>[2023] MERCK S.A || © Todos os direitos reservados. Estrada dos Bandeirantes, 1099, Jacarepaguá – Rio de Janeiro - RJ, CEP 22.710.571, Brasil
        `,
        },
      },
      SAIZEN: {
        titulo1: 'Tuitek &reg; Latam',
        titulo2: 'Saizen: os fatos ',
        subtitulo: 'Quiz No. 2',
        botonReferencias: 'Referências',
        gracias: 'Obrigado por suas respostas',
        preguntas: [
          {
            pregunta: 'O que é Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Saizen® é um hormônio do crescimento. A principal ação de Saizen® é aumentar o crescimento em crianças e adolescentes.',
                correcta: true,
                justificacion:
                  'Correto. Saizen® é um hormônio de crescimento que atua para aumentar o crescimento em crianças e adolescentes.',
              },
              {
                respuesta:
                  'Saizen® é um hormônio que retarda o crescimento em crianças e adolescentes.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Saizen ® é um hormônio de crescimento para tratar crianças e adultos com deficiência do hormônio do crescimento.',
              },
              {
                respuesta:
                  'Saizen® é um medicamento prescrito usado para prevenir dor de cabeça em crianças e adultos.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Saizen ® é um hormônio de crescimento para tratar crianças e adultos com deficiência do hormônio do crescimento.',
              },
            ],
          },
          {
            pregunta: 'Como Saizen® é administrado?',
            respuestas: [
              {
                respuesta: 'Saizen® é um comprimido administrado diariamente.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Saizen® é injetado via subcutânea diariamente.',
              },
              {
                respuesta: 'Saizen® é uma injeção mensal.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Saizen® é injetado via subcutânea diariamente.',
              },
              {
                respuesta: 'Saizen® é injetado via subcutânea diariamente.',
                correcta: true,
                justificacion:
                  'Correto. Saizen® é injetado via subcutânea diariamente.',
              },
            ],
          },
          {
            pregunta: 'Quais são alguns dos efeitos colaterais?',
            respuestas: [
              {
                respuesta:
                  'Os efeitos colaterais mais comuns de Saizen® são reações no local da injeção, como dor, vermelhidão e inchaço.',
                correcta: true,
                justificacion:
                  'Correto. Você também deve relatar quaisquer efeitos colaterais preocupantes ao profissional de saúde de seu filho, além de quaisquer efeitos colaterais apresentados que não estejam listados na bula informativa do paciente.',
              },
              {
                respuesta:
                  'Os efeitos colaterais comuns de Saizen® são diminuição do apetite e perda de peso.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Leia a bula informativa do paciente. Você também deve relatar quaisquer efeitos colaterais preocupantes ao profissional de saúde de seu filho, além de quaisquer efeitos colaterais apresentados que não estejam listados na bula informativa do paciente.',
              },
              {
                respuesta:
                  'Não existem efeitos colaterais conhecidos de Saizen®.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Leia a bula informativa do paciente. Você também deve relatar quaisquer efeitos colaterais preocupantes ao profissional de saúde de seu filho, além de quaisquer efeitos colaterais apresentados que não estejam listados na bula informativa do paciente.',
              },
            ],
          },
          {
            pregunta:
              'Quaisquer injeções consistentemente perdidas de Saizen® afetarão o crescimento.',
            respuestas: [
              {
                respuesta: 'Verdadeiro.',
                correcta: true,
                justificacion:
                  'Correto. Fale com o médico do seu filho se você/seu filho continuam perdendo as injeções.',
              },
              {
                respuesta: 'Falso.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Fale com o médico do seu filho se você/seu filho continuam perdendo as injeções.',
              },
            ],
          },
          {
            pregunta:
              'O que você pode fazer se seu filho apresentar dor no local da injeção?',
            respuestas: [
              {
                respuesta:
                  'Aplique uma compressa fria no local da injeção. Isso pode ajudar a reduzir a dor.',
                correcta: false,
                justificacion:
                  'Isto não está totalmente correto. Você também pode usar a distração para ajudar seu filho a esquecer a dor.',
              },
              {
                respuesta:
                  'Distraia seu filho com um brinquedo ou atividade favorita. Isso pode ajudá-los a esquecer a dor.',
                correcta: false,
                justificacion:
                  'Isto não está totalmente correto. Você também pode aplicar uma compressa fria no local da injeção para ajudar a reduzir a inflamação e a dor.',
              },
              {
                respuesta: 'Todos os itens acima.',
                correcta: true,
                justificacion: 'Correto.',
              },
            ],
          },
          {
            pregunta: 'Quanto tempo seu filho deve administrar Saizen®?',
            respuestas: [
              {
                respuesta:
                  'Seu filho precisa fazer esse tratamento pelo resto da vida e precisa continuar sendo avaliado pelo médico.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Seu filho deve parar de usar este tratamento quando alcançar uma altura adulta satisfatória, conforme avaliação do médico.',
              },
              {
                respuesta:
                  'Seu filho pode interromper o tratamento quando sentir que alcançou uma altura satisfatória.',
                correcta: false,
                justificacion:
                  'Isto não está correto. Seu filho deve parar de usar este tratamento quando alcançar uma altura adulta satisfatória, conforme avaliação do médico.',
              },
              {
                respuesta:
                  'Seu filho deve parar de administrar este tratamento quando alcançar uma altura adulta satisfatória, conforme avaliado pelo médico ou por outras razões, se necessário.',
                correcta: true,
                justificacion:
                  'Correto. Não pare de administrar Saizen® sem falar com o médico do seu filho. Se ainda tiver perguntas adicionais sobre a administração deste medicamento, pergunte ao médico ou farmacêutico do seu filho.',
              },
            ],
          },
        ],
        referencias: [],
        disclaimer: {
          inicio:
            'Este material foi concebido como uma atividade complementar que você pode realizar para reforçar as informações recebidas sobre a Tuitek. Esperamos que ajude! Você é o dono de todas as respostas que dá e que decide compartilhar por seus próprios meios. Sugerimos que faça o download do documento para realizar a atividade e depois guarde-o para o ter à mão quando o quiser consultar.',
          final: `BR-SAI-00414, Set/23. As informações incluídas aqui ou qualquer informação adicional fornecida pelo Programa de Suporte ao Paciente da Merck não substituem de forma alguma os conselhos médicos. Em caso de alguma dúvida sobre sua condição, tratamento e/ou o conteúdo deste material, consulte seu médico. Para uso exclusivo dos pacientes do PSP. Proibida sua reprodução total ou parcial.
        <br>[2023] MERCK S.A || © Todos os direitos reservados. Estrada dos Bandeirantes, 1099, Jacarepaguá – Rio de Janeiro - RJ, CEP 22.710.571, Brasil
        `,
        },
      },
    },
  },
};

export default Data;
