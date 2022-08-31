export default {
  medications: {
    label: 'Medicamentos',
    filterTitle: 'Filtrar por estado',
    search: 'Buscar medicamentos',
    status: {
      draft: 'Borrador',
      active: 'Activo',
      onHold: 'En espera',
      cancelled: 'Cancelada',
      completed: 'Terminada',
      enteredInError: 'Ingresado por error',
      stopped: 'Detenida',
      unknown: 'Desconocida',
    },
    intent: {
      proposal: 'Propuesta',
      plan: 'Plan',
      order: 'Orden',
      originalOrder: 'Orden original',
      reflexOrder: 'Orden refleja',
      fillerOrder: 'Orden de relleno',
      instanceOrder: 'Orden de instancia',
      option: 'Opción',
    },
    priority: {
      routine: 'Rutina',
      urgent: 'Urgente',
      asap: 'Lo antes posible',
      stat: 'Estadísticas',
    },
    filter: {
      all: 'Todos los estados',
    },
    requests: {
      label: 'Solicitudes de medicación',
      new: 'Solicitar medicación',
      view: 'Ver medicación',
      cancel: 'Cancelar medicación',
      complete: 'Medicación completa',
      error: {
        unableToRequest: 'No se pudo crear la solicitud de medicación.',
        unableToComplete: 'No se pudo completar la solicitud de medicación.',
        quantityRequired: 'Se requiere cantidad.',
        unitRequired: 'Se requiere unidad.',
      },
    },
    medication: {
      medication: 'Medicamento',
      for: 'por',
      status: 'Estado',
      intent: 'Intención',
      priority: 'Prioridad',
      notes: 'Notas',
      quantity: 'Cantidad',
      quantityValue: 'Valor',
      quantityUnit: 'Unidad',
      requestedOn: 'Solicitado el',
      requestedBy: 'Solicitado por',
      completedOn: 'Completado el',
      canceledOn: 'Cancelado el',
      patient: 'Paciente',
    },
  },
}
