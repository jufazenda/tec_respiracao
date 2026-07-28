import CloseRounded from '@mui/icons-material/CloseRounded'
import type { Factor } from '@/Types/fisiologiaTransporte'

export function FactorPopupSheet({
  popup,
  onClose,
}: {
  popup: Factor
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="relative bg-white rounded-t-2xl px-5 pt-4 pb-10 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-9 h-1 bg-[#dde8ea] rounded-full mx-auto mb-4" />

        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 ${
                popup.side === 'right' ? 'bg-[#e67e22]' : 'bg-[#2a6b70]'
              }`}
            />
            <p className="text-[13px] font-bold text-[#1a3a3c] leading-snug">{popup.title}</p>
          </div>
          <button onClick={onClose} className="text-[#aaa] flex-shrink-0 -mt-0.5">
            <CloseRounded sx={{ fontSize: 20 }} />
          </button>
        </div>

        <p className="text-[12px] text-[#444] leading-relaxed mb-4">{popup.body}</p>

        {popup.examples && (
          <>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-2">
              Exemplos clínicos
            </p>
            <div className="flex flex-wrap gap-1.5">
              {popup.examples.map(ex => (
                <span
                  key={ex}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                    popup.side === 'right'
                      ? 'bg-[#fdf0e4] text-[#7a4510]'
                      : 'bg-[#e4f4f6] text-[#1a4a4c]'
                  }`}
                >
                  {ex}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
